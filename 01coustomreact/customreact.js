
// function customReact(reactElement,mainContainer){
//     const domElement=document.createElement(reactElement.type)

//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     mainContainer.append(domElement)
// }


function customReact(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)

    domElement.innerHTML=reactElement.children
    // for(const [key,val] of Object.entries(reactElement.props)){
    //   domElement.setAttribute(key,val)
    // }

    for(const key in reactElement.props){
       if(key==='childern'){
          continue
       }
       domElement.setAttribute(key,reactElement.props[key])
    }
    mainContainer.append(domElement)
}

const reactElement={
   type:'a',
   props:{
     href:'https://www.google.com/',
     target:'_blank'
   },
   children:'Click here'
}


const mainContainer = document.querySelector('#root')

customReact(reactElement,mainContainer)

