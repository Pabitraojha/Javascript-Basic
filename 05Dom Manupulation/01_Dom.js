/* Dom basics*/
/* Dom stands for document object model. 
   1) document.getElementById("id_name").innerHtml= "write someting ......"
   2) document.getElementByClass("class_name")

   1)getAttribute("by id or class")
   2)setAttribute("by id or class") // it will overwrite

   suppose 
   :-> const title = document.getElementById("id_name")
   title.style.backgroundColor = "green";
   title.style.padding = "15px"

   title.textContent = give the all content
   title.innerHTML =give exact same value as .textContent but follow the property
   title.innerText = give complete html value1


   1) document.querySelector("h1")// give 1st h1 of the page
      document.querySelector("#Id_Name")//for id
      document.querySelector(".class_Name")
   2) document.querySelctorAll("h2")//give all h2
   
   3) document.getElementByClassName("class_Name")
   To convert a "Html Collection" in to an array by using
            Array.from(document.getElementByClassName("class_Name"))
            -Now we can use all properties of an array
    
    Parent - Children relationship 
        suppose 
        const parent = document.querySelector(.ClassName)
        console.log(parent.children[1].innerHTML);
        console.log(parent.firstElementChild);
        console.log(parent.lastElementChild);

        *** we can also move from child to parents
        const dayOne = document.queryselector(".day");
        console.log(dayOne.parentElement);
        console.log(dayOne.nextElementSibling);
        console.log(parent.childNodes); give all numbers of child nodes

*/

