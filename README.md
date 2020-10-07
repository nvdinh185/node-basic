# JS Note

## 0. Git Note

1. Tao repo va add remote URL

```bash
git init
git add .
git commit -am "day 01 first commit"
git remote add js https://github.com/phanxuanson/LearnJS.git
git push --set-upstream js master
```

2. Commit vao lan commit truoc ma khong them commit moi

```bash
git add .
git commit --amend --no-edit
git push --force
```

## 1. DOM basic

<https://www.w3schools.com/js/js_htmldom.asp>

1. The script dat o tren head va o body

```js
<script src="index.js"></script>
```

2. Su dung window.onload

```js
window.onload = function() {
	returnH1Tag();
	// console.log(a);
};
```

3. Phan biet HTMLCollection va Array
Cac ham getElements... thi se tra ve loai HTMLCollection
Rieng ham document.getEleementById thi se tra ve 1 element
```

```
4. Thao tac voi 1 doi tuong trong DOM

Properties va methods cua 1 element object trong DOM (JS)

<https://www.w3schools.com/jsref/dom_obj_all.asp>

5. Element va NOde trong JS

Element la 1 DOM Obj bat dau bang <>
Node la 1 DOM Obj <> hoac la text node
Text cung la 1 node
