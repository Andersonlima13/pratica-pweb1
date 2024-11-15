const usuarios = [];

const listaUsuariosElement = document.querySelector('#listaUsuarios');

function inserirUsuario() {
    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const cpf = document.querySelector('#cpf').value;

    if (!nome || !idade || !cpf) {
        alert("Por favor, preencha todos os campos.");
        return;
    }[]

    const usuario = { nome, idade, cpf };
    usuarios.push(usuario);

    inserirUsuarioNaLista(usuario);

    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
    document.querySelector('#cpf').value = '';
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.innerHTML = `<strong>Nome:</strong> ${usuario.nome}<br>
                             <strong>Idade:</strong> ${usuario.idade}<br>
                             <strong>CPF:</strong> ${usuario.cpf}<br>`;

    spanElement.addEventListener('click', () => {
        editarUsuario(usuario, spanElement);
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);
    listaUsuariosElement.appendChild(liElement);
}

function editarUsuario(usuario, spanElement) {
    const nomeInput = document.createElement('input');
    const idadeInput = document.createElement('input');
    const cpfInput = document.createElement('input');

    nomeInput.value = usuario.nome;
    idadeInput.value = usuario.idade;
    cpfInput.value = usuario.cpf;

    spanElement.replaceChildren(nomeInput, idadeInput, cpfInput);

    nomeInput.addEventListener('blur', () => {
        usuario.nome = nomeInput.value;
        atualizarExibicaoUsuario(usuario, spanElement);
    });

    idadeInput.addEventListener('blur', () => {
        usuario.idade = idadeInput.value;
        atualizarExibicaoUsuario(usuario, spanElement);
    });

    cpfInput.addEventListener('blur', () => {
        usuario.cpf = cpfInput.value;
        atualizarExibicaoUsuario(usuario, spanElement);
    });
}

function atualizarExibicaoUsuario(usuario, spanElement) {
    spanElement.innerHTML = `<strong>Nome:</strong> ${usuario.nome}<br>
                             <strong>Idade:</strong> ${usuario.idade}<br>
                             <strong>CPF:</strong> ${usuario.cpf}<br>`;
}
