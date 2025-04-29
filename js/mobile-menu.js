document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navContainer = document.querySelector(".nav-container")
    const dropHoverItems = document.querySelectorAll(".drop-hover")
  
    // Função para abrir/fechar o menu mobile
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active")
      navContainer.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  
    // Adiciona funcionalidade de dropdown para o menu mobile
    dropHoverItems.forEach((item) => {
      // Verifica se estamos em viewport mobile
      if (window.innerWidth <= 992) {
        const link = item.querySelector("a")
  
        // Só adiciona o evento se o item tiver um dropdown
        if (item.querySelector(".drop")) {
          link.addEventListener("click", (e) => {
            // Previne a navegação ao clicar no link que tem dropdown
            if (window.innerWidth <= 992) {
              e.preventDefault()
              item.classList.toggle("active")
  
              // Fecha outros dropdowns abertos
              dropHoverItems.forEach((otherItem) => {
                if (otherItem !== item) {
                  otherItem.classList.remove("active")
                }
              })
            }
          })
        }
      }
    })
  
    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
      if (
        navContainer.classList.contains("active") &&
        !navContainer.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileMenuToggle.classList.remove("active")
        navContainer.classList.remove("active")
        document.body.classList.remove("menu-open")
      }
    })
  
    // Ajusta o comportamento do menu ao redimensionar a janela
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        mobileMenuToggle.classList.remove("active")
        navContainer.classList.remove("active")
        document.body.classList.remove("menu-open")
  
        // Remove a classe active dos dropdowns
        dropHoverItems.forEach((item) => {
          item.classList.remove("active")
        })
      }
    })
  })
  