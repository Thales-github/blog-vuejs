Vue.component("artigo-1", {//<slot> é utilizado para que o componente aceite dados dentro dele, sem essa tag o componente terá apenas o conteúdo definido em sua inicialização Vue
    template: `
    <div class="col-11">

            <img src="./assets/img/post1.webp" alt="Post 1">
            <h2>MySQL no Google Cloud SQL</h2>
            <p class="artigo">
                Este post é um é um guia passo a passo para você aprender a hospedar o seu banco de dados
                MySQL no Google Cloud SQL.
                Obviamente você precisa de uma conta no Google e um cartão de crédito para ativar o
                faturamento. Se for a primeira vez o Google irá te dar $300 para experimentar qualquer
                serviço, assim você pode aprender, conhecer e até avaliar os preços cobrados.
                Todos os serviços que você configura no GCloud ficam agrupados por projetos, então a
                primeira coisa a se fazer é criar ou selecionar um projeto.
            </p>
    </div>
    `
});

Vue.component("artigo-2", {//<slot> é utilizado para que o componente aceite dados dentro dele, sem essa tag o componente terá apenas o conteúdo definido em sua inicialização Vue
    template: `
    
<div class="col-11">

<img src="./assets/img/post2.webp" alt="Post 2">
<h2>Programação Funcional - Tudo o Que Você Precisa Saber! Artigo 1 de 10</h2>
<p class="artigo">
    Olá Pessoal nesta série vamos falar sobre um importante Paradigma de Programação, A
    Programação Funcional e como ela é aplicada no JavaScript. Preparamos uma Série de 10
    artigos para abordar com exemplos o que é a Programação Funcional, Esse é o primeiro artigo.
    Quais são os conceitos que fazem parte desse Paradigma e como Programar em JavaScript
    utilizando a Programação Funcional? Veja a resposta nesta série completa.

    Obs. ao Leitor: Por vezes caro leitor, você verá em nossos posts a sigla TL;DR quando ela
    estiver presente prepare-se, vêm texto longo por aí, assim o resumo do post será colocado no
    Parágrafo TL;DR algo como Too Long Didn't Read ou Texto Longo, Não Li.
</p>

</div>
    `
});

Vue.component("artigo-3", {//<slot> é utilizado para que o componente aceite dados dentro dele, sem essa tag o componente terá apenas o conteúdo definido em sua inicialização Vue
    template: `
    <div class="col-11">

                        <img src="./assets/img/post3.webp" alt="Post 3">
                        <h2>Instalando e Configurando o PHP 7 e o Apache no Windows com Xampp</h2>
                        <p class="artigo">
                            PHP 7 é a linguagem por trás dos maiores sites do mundo, entre eles, Facebook, Google,
                            Wikipedia e muitos outros *. Preparamos um vídeo que faz parte do Curso Completo de PHP 7 da
                            Hcode na Udemy para ensinar como instalar e configurar o PHP 7 e o Apache utilizando um
                            facilitador para isso o XAMPP.

                            Existe uma diferença entre Linguagem de Programação e Servidor Web, neste vídeo abordamos a
                            diferença entre essas tecnologias e o que é um instalador como o XAMPP.
                        </p>

                    </div>
    `
});

let app = new Vue({
    el: "#blog",
    data: {
        mensagemDeLogin: "Bem vindo Thales",
        mensagemPadrao: "Blog",
    },
    methods: {
        login: function () {

            let labelDeLogin = document.querySelector("#labelLogin");
            labelDeLogin.style.display = "block";
            if (labelDeLogin.value == 1) {

                labelDeLogin.textContent = this.mensagemDeLogin;
                labelDeLogin.value = 0;
                return;
            }

            labelDeLogin.textContent = this.mensagemPadrao;
            labelDeLogin.value = 1;
        }
    },
    mounted: function () {
        
        let artigos = document.querySelectorAll(".artigo");
        artigos.forEach(artigo => {
            
            // console.log(artigo.textContent);
            artigo.textContent = artigo.textContent.slice(0,200) + "...";
        });
    }
});