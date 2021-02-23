const Story = require('./code');


function testOne() {
    let art = new Story("My Story", "Anny");
    art.like("John");
    console.log(art.likes);
    art.dislike("John");
    console.log(art.likes);
    art.comment("Sammy", "Some Content");
    console.log(art.comment("Ammy", "New Content"));
    art.comment("Zane", "Reply", 1);
    art.comment("Jessy", "Nice :)");
    console.log(art.comment("SAmmy", "Reply@", 1));
    console.log()
    console.log(art.toString('username'));
    console.log()
    art.like("Zane");
    console.log(art.toString('desc'));
}

function testTwo() {
    let story = new Story("My Story", "Anny");
    story.like('Tony');
    story.like('Ivan');
    console.log(story.likes);
    story.dislike('Tony');
    console.log(story.likes);
}


function testThree() {
    let story = new Story("My Story", "Anny");
    console.log(story.comment('Tony', 'Test Conent'));
    console.log(story.comment('Sidny', 'Test Conent #33333'));
    console.log(story.comment('Any', 'Test Conent #2', 1));
    console.log(story.comment('Any', 'Test Conent #2', 1));
    console.log(story.comment('Any', 'Test Conent #2', 1));
    console.log(story._comments);
}

testThree();
