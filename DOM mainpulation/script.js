//JavaScript DOM Full Course - GreatStack

/*
1.what is DOM -Document Object model 


2.What is nodes and type of nodes

3.Selecting elements using DOM

  1.getElementById()
    <div>
      <p id="message">JavaScript DOM</p>
    </div>

    let msg = document.getElementById("message");
    console.log(msg);


  2.getElementByName()
    <input type="radio" name="language" value="JavaScript">
    <input type="radio" name="language" value="python">

    let btn= document.getElementsByName("language");
    console.log(btn)


  3.getElementByTagName()
    <h1>first heading</h1>
    <h1>Second heading</h1>
    <h1>third heading</h1>
    <h1>fourth heading</h1>

     let heading = document.getElementsByTagName("h1");
    console.log(heading);

  
  4.getElementByClassName()
    <div>
      <h1 class="message">first heading</h1>
      <div id="container">
        <h1 class="message">second heading</h1>
        <h1 class="message">third heading</h1>
      </div>
    </div>

    let cont = document.getElementById("container");
    let msg = cont.getElementsByClassName("message");
    console.log(msg)
    
    
  5.querySelector() and querySelectorAll()
  
4.Traversing elements

  1.selecting parent element
   <div class="title">
      <p class="text">Welcome to naman</p>
    </div>

    let txt = document.querySelector(".text");
    console.log(txt.parentNode);
    //output: <div class="title">...</div>


  2.Selecting child element
   <div class="title">
    <p>Wlc to comp 1</p>
    <p>wlc to comp 2</p>
    <p>wlc to comp 3</p>
    <p>wlc to comp 4</p>
   </div>

    let parent = document.querySelector(".title")
    console.log(parent.lastElementChild);//for specific child
    console.log(parent.childNodes);//for all child node


  3.Selecting Sibling elements
   <div class="title">
    <p>Wlc to comp 1</p>
    <p class="second">wlc to comp 2</p>
    <p>wlc to comp 3</p>
    <p>wlc to comp 4</p>
   </div>

    let second = document.querySelector(".second")
    console.log(second.nextElementSibling);
    console.log(second.previousElementSibling);
  
  
5.Manipulating HTML elements
  
  1.createElement()
    let div = document.createElement("div");
    div.innerHTML="<p>Welcome to dont know</p>"
    document.body.appendChild(div);// add element on webpage
    div.className ="title"; //to add class on the div
    console.log(div);

  2.appendChild()
    use appendChild() method to add a node to the end of the list of child nodes of a specified parent node.
    <ul id="menu">
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Project</li>
    </ul>

    let menu = document.getElementById("menu");
    let list = document.createElement("li");
    list.innerHTML="Contact";
    menu.appendChild(list);//add end of the ul list
   
  3.textContent
   <ul id="menu">
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li style="display:none">Project</li>
    </ul>

    let menu = document.getElementById("menu");
    console.log(menu.textContent);
    //output:  Home  about  blog   Project

    console.log(menu.innerText);
    // output: Home  about  blog
      
    menu.textContent="hello!"; //replace all the exist code and write only given text

  4.innerHTML
    let menu= document.getElementById('menu')
    menu.innerHTML="<h1>Hello!</h1>"
    //it also replace the exist code and rewrite the given code


  4.5.Difference Between innerHTML and TextContent
    innerHTML:Use for adding or modifying HTML structure.
    Slower (parses HTML).

    TextContent:
    Use for working with plain text.
    Faster (no parsing).

  5.after()
    we can use after() method to insert one or more nodes after the element.
    //syntax: parentClass/Id.after(str1,str2...)
    let menu= document.getElementById('menu')
    let str1 = document.createElement("div");
    str1.innerHTML="hello!"
    menu.after(str1);

  6.append()  
    let menu= document.getElementById('menu')
    let str1 = document.createElement('li');
    let str2 = document.createElement('li');
    str1.innerHTML ="yo"
    str2.innerHTML = "honney singh"
    menu.append(str1,str2); 
    
  6.5.Difference between after() and append()
    after():
    Inserts content outside, after the element.
    As the next sibling of the element.
    Add content outside an element.
    Supported in modern browsers (not IE).

    append():
    Inserts content inside the element.
    As the last child of the element.
    Add content within an element.
    Supported in all modern browsers.

  7.prepend()
    let menu = document.getElementById("menu");
    let str1= document.createElement('li')
    let str2 = document.createElement('li')
    str1.textContent="hello"
    str2.textContent='world'
    //syntax: parentNode.prepend(newNodes);
    menu.prepend(str1,str2);

  8.insertAdjacentHTML()
    let menu = document.getElementById('menu')
    menu.insertAdjacentHTML("beforeend","<li>contact</li>")
    menu.insertAdjacentHTML("afterbegin","<li>contact</li>")

  9.replaceChild()
    let menu = document.getElementById('menu')
    // syntax: parentNode.replaceChild(newChild,oldChild);
    let newChild = document.createElement('li')
    newChild.textContent='Contact'
    menu.replaceChild(newChild , menu.children[0]);

  10.cloneNode()
    let menu = document.getElementById('menu')
    // Syntax: let newNode = originalNode.cloneNode();
    let newNode = menu.cloneNode(true);//default ma false rhta hai. output: ul#menu
    console.log(newNode);//clone the parent and child element bcz its true

  11.removeChild()
  let menu = document.getElementById('menu')
    // syntax: parentNode.removeChild(childNode)
    menu.removeChild(menu.lastElementChild)//this will remove Project li not the blog
    menu.removeChild(menu.firstElementChild)

  12.insertBefore()
    use insertBefore() method to insert a new node before an existing node as a child node of a parent node.
    let menu = document.getElementById('menu')
    // syntax: parentNode.insertBefore(newNode, existingNode);
    let str1 = document.createElement('li');
    str1.textContent='hello'
    menu.insertBefore(str1 ,menu.firstElementChild)
  
6.Attribute methods
  <input type="text" id="username" placeholder="username">

  let inputBox= document.getElementById("username");
  console.log(inputBox.attributes);

  1.getAttribute()
    let inputBox= document.getElementById("username");
    console.log(inputBox.getAttribute('type'));
    console.log(inputBox.getAttribute('placeholder'));

  2.setAttribute()
    let inputBox = document.getElementById("username");
    inputBox.setAttribute("class", "user");
    console.log(inputBox);

  3.hasAttribute()
    let inputBox = document.getElementById("username");
    console.log( inputBox.hasAttribute("class"));

  4.removeAttribute()
    let inputBox = document.getElementById("username");
    inputBox.removeAttribute('placeholder');
    console.log(inputBox);
  
7.Manipulating Element's Styles

  1.style property
    <input type="text" id="username" placeholder="username" style="background-color: red; font-size: 20px;" />

    let inputBox = document.getElementById("username");
    console.log(inputBox.style);
    console.log(inputBox.style.fontSize);
    console.log(inputBox.style.backgroundColor);
    inputBox.style.padding = "10px";
    console.log(inputBox);

  2.cssText
    // inputBox.style.cssText = "width:200px";//overright and apply the given input
    inputBox.style.cssText += "width:200px; height:100px";// + this will add with the existing values
    console.log(inputBox);

  3.getComputedStyle()
   <style>
      input{
        background-color: red;
        font-size: 12px;
        width:300px ;
      }
    </style>

    let inputBox = document.getElementById("username");
    // syntax: window.getComputedStyle(element , pseudoElement)
    console.log( window.getComputedStyle(inputBox).fontSize)
    console.log( window.getComputedStyle(inputBox).backgroundColor)
    console.log( window.getComputedStyle(inputBox).width)

  4.className property
    <h1 id="title" class="main message">Naman</h1>

    let title = document.getElementById("title");
    // title.className = " new "//replace the exsiting class name with new one
    title.className += " new ";
    console.log(title);

  5.classList property
    <h1 id="title" class="main message">Naman</h1>

    let title = document.getElementById("title");
    title.classList.add("new","new2");

    title.classList.remove("message", "main");

    title.classList.replace("new", "msg");

    console.log(title.classList.contains("msg"))//true

    title.classList.toggle("new2")//id the given class name is availble then the toggle will remove it and if it not available it will add the givne class name

    console.log(title);
 
8.JavaScript Events

  1.What is event
    An event handler is a piece of code that will be execute when the event occurs. Also know as event listener.

    When the event occurs, the web broswer passed an Event object to the event handler.

    onclick="console.log(event.type)"//click
    onclick="console.log(event.target)"// whole tag from where it getting event

    "this" keyword inside the event handler refer to target element.
    onclick="console.log(this)"

     let btn = document.getElementById('btn');
    btn.onclick = null;//remove the event handler

  2.Event Bubbling & Event Captuting
  3.Event Handler in HTML Attributes
  4.DOM level 0 event handlers
  5.addEventListener()
    add EventListener() method will register an event handler

    syntax: addEventListener(event,function(){}, useCapture)//use capture is a bollean value true, false it is not nessary 

    let btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
      console.log("button clicked");
    })

    let btn = document.getElementById('btn');
    function displayMsg(){
      console.log("button CLicked");
    }

    btn.addEventListener('click',displayMsg)
    let btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
      console.log(event.type);
    })//output: click

    let btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
      console.log(this);
    })//output: <button id="btn">Click me</button>

  6.removeEventListener()
    removeEventListener() method will remove an event handler

     btn.removeEventListener('click', displayMsg)

  7.Event Objects
  8.Different Types of Event
    1.mousemove:Event fires repeatedly when you move the mouse cursor around the element 

    2.mousedown:Event fires when you press the mouse button on the element

    3.mouseup: Event fires when you release the mouse button on the element 

    4.mouseover: Event fires when the cursor move from outside to inside the boundaries of the element

    5.mouseout: Event fires when the cursor is over an element and then moves to another element.

    6.keydown: Event fires when you press a key on the keyboard & fires repeatedly while you're holding down the key.
    
    7.keyup: Event fires when you release a key on the keyboard.

    8.keypress: Event fires when you press a character on keyboard like a,b,c it fires repeatedly while you hold down the key on the keyboard.

    9.Scroll: Event fires when you scroll a document or an element , the scroll events fire.
  */

