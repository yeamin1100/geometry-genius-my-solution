function rectangleCalculation() {
    const rectangleLenth = inputValue('rectangle-lenth');
    const rectangleWidth = inputValue('rectangle-width');

    if (isNaN(rectangleLenth) || isNaN(rectangleWidth) || rectangleLenth <= 0 || rectangleWidth <= 0) {
        alert('Please enter positive numbers for base and height.');
      }
      // If both inputs are positive numbers, do something else
      else {
        // Do something else here, like calculating the area or whatever your logic requires
        const calculateRectangle = rectangleLenth * rectangleWidth;
        setInnertextByValue(calculateRectangle, 'Rectangle');
      }
    
    
}