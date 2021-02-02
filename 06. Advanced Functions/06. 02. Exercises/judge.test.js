var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};

var answer = result.call(forumPost, 'score');
var expected = [150, 60, 90, 'hot'];

expect(forumPost.upvotes).to.equal(120, 'Actual upvotes where manipulated');
expect(forumPost.downvotes).to.equal(30, 'Actual downvotes where manipulated');

compareScore(expected, answer);

function compareScore(expected, answer) {
    expect(expected[0]).to.equal(answer[0], 'Incorrect number of upvotes');
    expect(expected[1]).to.equal(answer[1], 'Incorrect number of downvotes');
    expect(expected[2]).to.equal(answer[2], 'Incorrect score');
    expect(expected[3]).to.equal(answer[3], 'Incorrect rating');
}