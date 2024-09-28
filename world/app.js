document.getElementById('text-input').addEventListener('input',function(event){
   const inputFieldValue = event.target.value;

   const wordCount = inputFieldValue.trim().split(/\s+/).filter(function(word){
    return word.length > 0
   }).length

   const charCount = inputFieldValue.length;
   document.getElementById('word-count').textContent = wordCount
   document.getElementById('char-count').textContent = charCount

   const twitterLimit = 200 - charCount
   const facebookLimit = 63206 - charCount

   document.getElementById('twitter-limit').textContent = twitterLimit >= 0 ? twitterLimit : 0

   document.getElementById('facebook-limit').textContent = facebookLimit >= 0 ? facebookLimit : 0
});


