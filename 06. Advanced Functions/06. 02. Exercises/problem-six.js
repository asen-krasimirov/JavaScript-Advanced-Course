

function solution(command) {
    const executeCommand = {
        'upvote': () => { this.upvotes++ },
        'downvote': () => { this.downvotes++ },
        'score': () => {
            let curUpvotes = this.upvotes;
            let curDownvotes = this.downvotes;

            let totalVotes = curUpvotes + curDownvotes;
            let balance = curUpvotes - curDownvotes;


            let postRating = 'new';
            if (curUpvotes > totalVotes * 0.66) { postRating = 'hot'; }
            else if (balance >= 0 && curUpvotes > 100) { postRating = 'controversial'; }
            if (balance < 0) { postRating = 'unpopular'; }
            if (totalVotes < 10) { postRating = 'new'; }

            if (totalVotes > 50) {
                let obfuscation = curUpvotes > curDownvotes ? Math.ceil(curUpvotes * 0.25) : Math.ceil(curDownvotes * 0.25);
                curUpvotes += obfuscation;
                curDownvotes += obfuscation;
            }

            return [curUpvotes, curDownvotes, balance, postRating];
        },
    };


    return executeCommand[command]();
}


function test() {
    let post = {
        id: '3',
        author: 'emil',
        content: 'wazaaaaa',
        upvotes: 100,
        downvotes: 100
    };
    solution.call(post, 'upvote');
    solution.call(post, 'downvote');

    let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
    console.log(JSON.stringify(score) == JSON.stringify([127, 127, 0, 'controversial']));

    for (let i = 1; i <= 50; i++) {
        solution.call(post, 'downvote');          // (executed 50 times)
    }

    score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
    console.log(JSON.stringify(score) == JSON.stringify([139, 189, -50, 'unpopular']));

}


let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};


function testTwo() {
    console.log('Test Two');

    // Under border case
    let answer = solution.call(forumPost, 'score');
    let expected = [4, 5, -1, 'new'];
    console.log(answer);
    console.log(expected);
}


function testThree() {
    console.log('Test Three');
    solution.call(forumPost, 'downvote');
    answer = solution.call(forumPost, 'score');
    expected = [4, 6, -2, 'unpopular'];
    console.log(answer);
    console.log(expected);
}


function testFour() {
    console.log('Test Four');


    // let forumPost = {
    //     id: '1234',
    //     author: 'author name',
    //     content: 'these fields are irrelevant',
    //     upvotes: 4,
    //     downvotes: 5
    // };


    solution.call(forumPost, 'upvote');
    solution.call(forumPost, 'upvote');
    answer = solution.call(forumPost, 'score');
    expected = [6, 6, 0, 'new'];
    console.log(answer);
    console.log(expected);
}

function testFive() {
    console.log('Test Five')

    forumPost.upvotes = 132;
    forumPost.downvotes = 68;

    answer = solution.call(forumPost, 'score');
    expected = [165, 101, 64, 'controversial'];
    console.log(answer);
    console.log(expected);
}

function testSix() {
    console.log('Test Six')

    forumPost.upvotes = 120;
    forumPost.downvotes = 30;

    answer = solution.call(forumPost, 'score');
    expected = [150, 60, 90, 'hot'];
    console.log(answer);
    console.log(expected);
}


// testTwo();
// testThree();
// testFour();
// testFive();
testSix();