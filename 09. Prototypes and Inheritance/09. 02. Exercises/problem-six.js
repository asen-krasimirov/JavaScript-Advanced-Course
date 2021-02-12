

function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                result += `\nComments:\n * ${this.comments.join('\n * ')}`;
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}


const classes = solve();


function testOne() {
    const testInstance = new classes.SocialMediaPost('Name', 'Test Content', 4, 1);
    // testInstance.addComment('Test1');
    // testInstance.addComment('Test2');
    // testInstance.addComment('Test3');

    console.log(testInstance.toString());
}

function testTwo() {
    const testInstance = new classes.BlogPost('Name', 'Test Content', 4);
    testInstance.view();
    testInstance.view();

    console.log(testInstance.toString());
}

function testThree() {
    let testInstance = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);
    console.log(testInstance.toString());
}


// testOne();
// testTwo();
testThree();