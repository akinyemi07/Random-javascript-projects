let count = 10;
const interval = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log("Liftoff! 🚀");
    clearInterval(interval);
  }
}, 1000);
