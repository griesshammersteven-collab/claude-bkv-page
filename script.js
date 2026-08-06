document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => {
      if (open !== item) open.classList.remove("open");
    });
    item.classList.toggle("open", !isOpen);
  });
});
