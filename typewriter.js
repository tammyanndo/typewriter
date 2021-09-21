const text = "hello there from lighthouse labs";
let counter = 0;
typewriter = function (sentence) {
  for (const char of sentence) {
    counter = counter + 1
    setTimeout(() => {
      process.stdout.write(char);
    }, (50 * counter))
  }
  setTimeout (() => {
    process.stdout.write('\n');
  }, (50 * (counter + 1))
  )
}
typewriter(text);