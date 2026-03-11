import "./ListaAlunos.css";

export default function ListaALunos({ alunos, onEditar, onExcluir }) {

    if (alunos.length === 0) {
        return <p className="sem-alunos">Nenhum aluno cadastrado.</p>;
    }

    return (
        <div className="lista-alunos">
            <table className="tabela-alunos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {alunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.nota}</td>
                            <td>
                                <button 
                                    className="btn-editar"
                                    onClick={() => onEditar(aluno)}
                                >
                                    Editar
                                </button>

                                <button 
                                    className="btn-excluir"
                                    onClick={() => onExcluir(aluno.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}