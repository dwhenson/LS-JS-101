// Is there a difference between these implementations, other than the method
// she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // mutates buffer
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); // new array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
