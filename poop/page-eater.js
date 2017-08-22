function eatPage() {
  document.body.innerHTML = "<html><center><h1 style='font-size: 12rem; margin-top: 10%' onclick='history.go(-1)'><a href='javascript:history.back()'>💩</a></h1><h2 style='font-family: Helvetica; font-size:4rem; padding:2rem;'><a href='javascript:history.back()'>Go back</a></h2><center></html>";
}

eatPage();