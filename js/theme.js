document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme) {
    document.documentElement.className = savedTheme
  } else {
    document.documentElement.classList.add("dark-theme")
    document.documentElement.classList.remove("light-theme")
    localStorage.setItem("theme", "dark-theme")
  }

  const themeToggle = document.getElementById("theme-toggle")

  themeToggle.addEventListener("click", () => {
    if (document.documentElement.classList.contains("light-theme")) {
      document.documentElement.classList.remove("light-theme")
      document.documentElement.classList.add("dark-theme")
      localStorage.setItem("theme", "dark-theme")
    } else {
      document.documentElement.classList.remove("dark-theme")
      document.documentElement.classList.add("light-theme")
      localStorage.setItem("theme", "light-theme")
    }
  })

  const cards = document.querySelectorAll(".pet-card, .service-card, .testimonial-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 8px 20px var(--shadow-color)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 4px 10px var(--shadow-color)"
    })
  })

  const buttons = document.querySelectorAll("button:not(.theme-toggle)")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const x = e.clientX - e.target.getBoundingClientRect().left
      const y = e.clientY - e.target.getBoundingClientRect().top

      const ripple = document.createElement("span")
      ripple.style.position = "absolute"
      ripple.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
      ripple.style.borderRadius = "50%"
      ripple.style.width = "100px"
      ripple.style.height = "100px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.style.transform = "translate(-50%, -50%) scale(0)"
      ripple.style.animation = "ripple 0.6s linear"

      this.style.overflow = "hidden"
      this.style.position = "relative"
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  const style = document.createElement("style")
  style.innerHTML = `
    @keyframes ripple {
      to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
})

