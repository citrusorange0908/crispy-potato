const supabase = supabase.createClient(
"SUPABASE_URL",
"SUPABASE_ANON_KEY"
)

async function signup(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

await supabase.auth.signUp({
email: email,
password: password
})

alert("登録完了")

}

async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const { data, error } = await supabase.auth.signInWithPassword({
email: email,
password: password
})

if(data){
location.href="dashboard.html"
}

}

async function addPost(){

const text = document.getElementById("post").value

await supabase
.from("posts")
.insert([{text:text}])

loadPosts()

}

async function loadPosts(){

const { data } = await supabase
.from("posts")
.select("*")

let html=""

data.forEach(post=>{
html += "<p>"+post.text+"</p>"
})

document.getElementById("posts").innerHTML=html

}
