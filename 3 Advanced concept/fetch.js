fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data));


async function fetchData() {
  let res = await fetch('https:www.google.com');
  let data = await res.text();
   console.log(data);

}
