document.addEventListener("DOMContentLoaded" , () =>{
    const counterElement = document.getElementById('counter');
      const incrementButton = document.getElementById('incrementButton');
      const resetButton = document.getElementById('resetButton');
  
      // مقدار اولیه شمارنده
      let count = 0;
  
      // افزودن صلوات
      incrementButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
      });
  
      // بازنشانی شمارنده
      resetButton.addEventListener('click', () => {
        count = 0;
        counterElement.textContent = count;
    });
  })