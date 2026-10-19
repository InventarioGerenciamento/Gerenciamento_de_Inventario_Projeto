<?php
declare(strict_types=1);

const DATA_FILE = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'inventory.json';

function initial_data(): array
{
    return [
        'produtos' => [
            ['nome'=>'Notebook Dell Inspiron 15','categoria'=>'Eletrônicos','fornecedor'=>'TechSupply Brasil','marca'=>'Dell','local'=>'Estoque principal','quantidade'=>'18','minimo'=>'5','status'=>'Disponível'],
            ['nome'=>'Cadeira ergonômica Pro','categoria'=>'Mobiliário','fornecedor'=>'Office Center','marca'=>'Flexform','local'=>'Sala de equipamentos','quantidade'=>'4','minimo'=>'6','status'=>'Estoque baixo'],
            ['nome'=>'Papel sulfite A4 · caixa','categoria'=>'Escritório','fornecedor'=>'Papelaria Horizonte','marca'=>'Chamex','local'=>'Estoque principal','quantidade'=>'32','minimo'=>'10','status'=>'Disponível'],
            ['nome'=>'Monitor LED 24 polegadas','categoria'=>'Eletrônicos','fornecedor'=>'TechSupply Brasil','marca'=>'LG','local'=>'Sala de equipamentos','quantidade'=>'11','minimo'=>'4','status'=>'Disponível'],
            ['nome'=>'Kit teclado e mouse sem fio','categoria'=>'Eletrônicos','fornecedor'=>'TechSupply Brasil','marca'=>'Logitech','local'=>'Estoque secundário','quantidade'=>'3','minimo'=>'5','status'=>'Estoque baixo'],
        ],
        'categorias' => [
            ['nome'=>'Eletrônicos','descricao'=>'Equipamentos e acessórios de tecnologia','produtos'=>'3','status'=>'Ativa'],
            ['nome'=>'Escritório','descricao'=>'Materiais de uso cotidiano','produtos'=>'1','status'=>'Ativa'],
            ['nome'=>'Mobiliário','descricao'=>'Móveis para ambientes de trabalho','produtos'=>'1','status'=>'Ativa'],
            ['nome'=>'Limpeza','descricao'=>'Materiais de limpeza e conservação','produtos'=>'0','status'=>'Ativa'],
        ],
        'fornecedores' => [
            ['nome'=>'TechSupply Brasil','contato'=>'Rafael Costa','email'=>'vendas@techsupply.com.br','telefone'=>'(11) 3456-7800','categoria'=>'Tecnologia','status'=>'Ativo'],
            ['nome'=>'Office Center','contato'=>'Paula Mendes','email'=>'paula@officecenter.com.br','telefone'=>'(11) 3988-1200','categoria'=>'Mobiliário','status'=>'Ativo'],
            ['nome'=>'Papelaria Horizonte','contato'=>'Lucas Ribeiro','email'=>'contato@horizonte.com.br','telefone'=>'(21) 2444-9010','categoria'=>'Papelaria','status'=>'Ativo'],
        ],
        'locais' => [
            ['nome'=>'Estoque principal','categoria'=>'Geral','setor'=>'Prédio A · Térreo','itens'=>'50','responsavel'=>'Mariana Alves','status'=>'Ativo'],
            ['nome'=>'Estoque secundário','categoria'=>'Geral','setor'=>'Prédio B · Sala 12','itens'=>'18','responsavel'=>'João Pedro','status'=>'Ativo'],
            ['nome'=>'Sala de equipamentos','categoria'=>'Eletrônicos','setor'=>'Prédio A · 2º andar','itens'=>'15','responsavel'=>'Ana Costa','status'=>'Ativo'],
        ],
        'usuarios' => [
            ['nome'=>'Mariana Alves','cpf'=>'•••.•••.•••-42','email'=>'mariana.alves@empresa.com','cargo'=>'Administradora','status'=>'Ativo'],
            ['nome'=>'João Pedro Santos','cpf'=>'•••.•••.•••-18','email'=>'joao.santos@empresa.com','cargo'=>'Supervisor','status'=>'Ativo'],
            ['nome'=>'Ana Costa Lima','cpf'=>'•••.•••.•••-73','email'=>'ana.lima@empresa.com','cargo'=>'Funcionária','status'=>'Ativo'],
        ],
    ];
}

function load_data(): array
{
    if (!is_file(DATA_FILE)) return initial_data();
    $contents = file_get_contents(DATA_FILE);
    $decoded = $contents === false ? null : json_decode($contents, true);
    return is_array($decoded) ? $decoded : initial_data();
}

if (isset($_GET['api'])) {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo json_encode(load_data(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $payload = json_decode((string)file_get_contents('php://input'), true);
        $expected = ['produtos', 'categorias', 'fornecedores', 'locais', 'usuarios'];
        if (!is_array($payload) || array_diff($expected, array_keys($payload))) {
            http_response_code(400);
            echo json_encode(['error' => 'Dados de inventário inválidos.'], JSON_UNESCAPED_UNICODE);
            exit;
        }
        foreach ($expected as $key) {
            if (!is_array($payload[$key])) {
                http_response_code(400);
                echo json_encode(['error' => 'A lista ' . $key . ' precisa ser válida.'], JSON_UNESCAPED_UNICODE);
                exit;
            }
        }
        $directory = dirname(DATA_FILE);
        if (!is_dir($directory) && !mkdir($directory, 0775, true) && !is_dir($directory)) {
            http_response_code(500);
            echo json_encode(['error' => 'Não foi possível preparar o arquivo de dados.'], JSON_UNESCAPED_UNICODE);
            exit;
        }
        $saved = file_put_contents(DATA_FILE, json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT), LOCK_EX);
        if ($saved === false) {
            http_response_code(500);
            echo json_encode(['error' => 'Não foi possível salvar os dados. Verifique a permissão da pasta data.'], JSON_UNESCAPED_UNICODE);
            exit;
        }
        echo json_encode(['saved' => true]);
        exit;
    }
    http_response_code(405);
    header('Allow: GET, POST');
    echo json_encode(['error' => 'Método não permitido.']);
    exit;
}

?>