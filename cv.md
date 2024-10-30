# My resume

## Gregory Bychkov
![My avatar](https://i.ibb.co/TWzbkkk/7f922dcf-946c-4385-8e04-1b5a0c2789c4.jpg)
Junior back-end/front-end developer

## My name is *Gregory*, my contacts:
* [Telegram](https://t.me/tetraciline)
* [Discord](https://discordapp.com/users/622442422957244447)
* [Kwork](https://kwork.ru/user/tetracicline)


## About me:
### Attrubutes:
Positive attributes:
+ Purposeful
+ Careful
+ Well-communicating
+ Helping others
+ Responsible
+ Very modest

Negative attributes:
+  

### Why am I here?
I am studying here with the aim of improving my qualifications and possible future employment. 
I consider myself a responsible and, most importantly, goal-oriented person. I have no commercial experience in frontend development, I moved from the backend myself

### My skills
+ Fluent in Python: selenium, pyrogram, aiogram, pygame, requests, etc
+ JS Basic
+ Git, Github
+ Good advertising

### Code examples

#### Code
Task: Two strings of lowercase Latin characters are given: string J and string S. The characters in string J are “jewels”, the characters in string S are “stones”. We need to determine how many characters from S are simultaneously “jewels”. Simply put, we need to check how many characters from S are included in J.
This is a warm-up problem for which we post ready solutions. It is very simple and is needed so that you can familiarize yourself with our automatic solution checking system. Input and output is done via files, or via standard I/O streams, as you prefer.
Solution: 
```
const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});
 
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const [jewels, stones] = lines
    let result = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones.charAt(i))) {
            ++result;
        }
    }
    process.stdout.write(result.toString());
});
```
The task was taken from the yandex.contest familiarization course*

### My projects
##### [SharkoGram](https://github.com/Quadrotez/SharkoGram/)
A custom telegram client written in python using pyrogram. The project is an abandoned project. The philosophy of the project was to be able to encrypt sent messages using cryptography

##### [GptParser (Or ParsGPT)](https://github.com/Quadrotez/gptparser)
A project conceived as an attempt to recreate the idea of the “dead internet” into reality. The script leaves comments under posts in telegram using neural networks. The project is also abandoned, but usable

### Work Experience
Previously worked only in freelancing on kwork: https://kwork.ru/user/tetracicline

### My education
I haven't taken any courses before. All my knowledge comes from reading documentation and watching videos on YouTube

## Languages
English: **B2**
Russian: **Main language**
