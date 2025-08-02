function divide (numerator, denominator){
    if (denominator === 0 || isNaN(numerator) || isNaN(denominator)) {
        throw new Error('Incorrect values numerator or denominator');
    }
    return numerator / denominator;
}

try {
  const result = divide(30, 10);
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}

try {
  const result = divide(0, 10);
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}

try {
  const result = divide(10, 0);
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}

try {
  const result = divide(10, 'a');
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}

try {
  const result = divide('b', 'a');
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}

try {
  const result = divide('b', 1);
  console.log(result);  
} catch (error) {
  console.error("Error:", error.message);
}finally {
   console.log('The work is complete.');
}