# youTHrive Website

O **youTHrive Website** é uma plataforma informativa dinâmica de nove páginas desenvolvida de raiz em ambiente de **estágio internacional em Malta**. O projeto consistiu na criação de um portal institucional em inglês para uma organização em fase de lançamento, focada em programas educativos e desenvolvimento pessoal e profissional de jovens.

O projeto foi totalmente concluído, validado e aprovado pelo cliente final (Kevin Spiteri), encontrando-se preparado para publicação.

## Características e Funcionalidades

*   **Arquitetura Modular de Componentes:** Separação do código de desenvolvimento (blocos HTML reutilizáveis como `header.html` e `footer.html`) dos recursos de distribuição pública, otimizando o carregamento e a manutenção.
*   **Gestão de Conteúdos Complexos:** Organização estrutural de uma grande variedade de temas (programas, projetos, notícias e resultados) distribuídos de forma limpa por nove páginas independentes.
*   **Identidade Visual e Contraste:** UI moderna baseada numa paleta de cores equilibrada entre o branco e o azul, com tons escuros para garantir a legibilidade do texto e evitar a poluição visual.
*   **Formulário com Validação Avançada (JavaScript):** Módulo de contacto com validação dinâmica no lado do cliente (client-side) que inclui:
    *   Verificação de campos obrigatórios vazios e validação de formato de e-mail.
    *   Alertas e indicações visuais de erro em tempo real que desaparecem assim que o utilizador corrige a informação.
    *   Controlo de submissão duplicada (bloqueio temporário do botão de envio com indicador "Sending...").
    *   Limpeza automática de campos e notificação de sucesso pós-validação.
*   **Design Responsivo e Menu Mobile:** Layout fluido adaptado para computadores, tablets e telemóveis, com lógica em JavaScript para o controlo de abertura e fecho do menu em ecrãs reduzidos.

## Tecnologias e Ferramentas Utilizadas

*   **HTML5:** Estruturação semântica das páginas e vistas.
*   **CSS3:** Estilização isolada por página para evitar conflitos de estilo, animações e media queries para responsividade.
*   **JavaScript (Vanilla):** Motor lógico para a validação do formulário, carregamento de componentes comuns e comportamento do menu móvel.
*   **Netlify:** Plataforma utilizada para o alojamento temporário e realização de testes de comportamento em dispositivos telemóveis reais.
*   **Flaticon:** Recursos gráficos e ícones minimalistas utilizados como âncoras visuais para identificar as secções de programas.

## Engenharia de Software e Aprendizagens

*   **Adaptação a Requisitos de Privacidade:** Resposta ágil a uma alteração de última hora solicitada pelo cliente para proteger a identidade e privacidade das pessoas na página "About", substituindo os recursos gráficos originais sem desestruturar o layout CSS planeado.
*   **Desenvolvimento Iterativo:** Processo de desenvolvimento focado na melhoria contínua através do feedback do cliente, resultando em duas reformulações completas de design até atingir o impacto visual moderno pretendido.
