function parallelogramCalculation() {
    const parallelogramBase = inputValue('parallelogram-base');
    const parallelogramHeight = inputValue ('parallelogram-height');

    if (isNaN(parallelogramBase) || isNaN(parallelogramHeight) || parallelogramBase <= 0 || parallelogramHeight <= 0) {
        alert('Please enter positive numbers for base and height.');
      }
      // If both inputs are positive numbers, do something else
      else {
        // Do something else here, like calculating the area or whatever your logic requires
        const calculateParallelogram = parallelogramBase * parallelogramHeight;
        setInnertextByValue(calculateParallelogram, 'Parallelogram');
      }
}