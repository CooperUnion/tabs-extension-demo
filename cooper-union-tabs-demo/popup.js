window.onload = () =>{
  chrome.tabs.query({}, (tabs)=>{
    document.querySelector("#number").innerHTML = tabs.length
   
    document.querySelector("#upload").addEventListener("click", async (event)=>{
      event.preventDefault()
      let post = await fetch("https://upload-your-tabs.glitch.me", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tabs)
      })

      let postResponse = await post.json()
      console.log(postResponse)
    })
  });
}  
  
