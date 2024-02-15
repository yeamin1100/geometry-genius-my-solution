function triangleCalculate() {
    
    const triangleBase = inputValue('triangle-base');
    // console.log(triangleBase)

    const triangleHight = inputValue("triangle-height");
    // console.log(triangleHight)

    if (isNaN(triangleBase) || isNaN(triangleHight) || triangleBase <= 0 || triangleHight <= 0) {
        alert('Please enter positive numbers for base and height.');
      }
      // If both inputs are positive numbers, do something else
      else {
        // Do something else here, like calculating the area or whatever your logic requires
        const calculateTriangle = 0.5 * triangleBase * triangleHight;
        setInnertextByValue(calculateTriangle, 'Triangle');
      }
    
    
}
