async function getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        document.getElementById("error_msg").innerHTML = `${username} not found`;
        return; 
      }
      const data = await response.json();
      localStorage.setItem('userData', JSON.stringify(data));
      console.log("User found");
      loadNewPage();
  
    } catch (error) {
      console.error("Error fetching user data:", error);
      document.getElementById("error_msg").innerHTML = "Error fetching user data";
    }
  }
  
function storeValue() {
    user_name = document.getElementById("username").value;
    console.log("Stored Value:", user_name);
    return user_name;
}
function loadNewPage(){
    window.location.href = "user_info_display.html"; 
}
//ensures that the page is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data) {
        document.getElementById("profileName").innerText = data.login || '';
        document.getElementById("Bio").innerText = data.bio || '';
        document.getElementById("repos").innerText = data.public_repos || 0;
        document.getElementById("followers").innerText = data.followers || 0;
        document.getElementById("following").innerText = data.following || 0;
        document.getElementById("profileImage").src = data.avatar_url || '';
    }
});
function reloadPage(){
    window.location.href = "homepage.html"
}

