class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    removeUsernameFromLikes(username) {
        this._likes = this._likes.filter((ele) => { return ele != username; });
    }

    getComment(id) {
        for (const comment of this._comments) {
            if (comment.commentId == id) {
                return comment;
            }
        }
    }

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }

        this.removeUsernameFromLikes(username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        // {Id, Username, Content, Replies}
        // {Id, Username, Content}
        const comment = this.getComment(id);

        if (!comment) {
            let commentId = this._comments.length + 1;
            const replies = [];
            this._comments.push({ commentId, username, content, replies });
            return `${username} commented on ${this.title}`;
        } else {
            let replyId = `${comment.commentId}.${comment.replies.length + 1}`;
            comment.replies.push({ replyId, username, content });
            return `You replied successfully`;
        }
    }

    sortComments(sortingType) {

        const sortingTypes = {
            'username': sortByUsername,
            'asc': sortByAscendingOrder,
            'desc': sortByDescendingOrder,
        };

        sortingTypes[sortingType]();

        function sortByUsername() {
            this._comments.sort((one, two) => one.username.localeCompare(two.username));
            for (let comment of this._comments) {
                comment.replies.sort((one, two) => one.username.localeCompare(two.username));
            }
        }

        function sortByAscendingOrder() {
            this._comments.sort((one, two) => Number(one.commentId) - Number(two.commentId));
            for (let comment of this._comments) {
                comment.replies.sort((one, two) => Number(one.replyId) - Number(two.replyId));
            }
        }

        function sortByDescendingOrder() {
            this._comments.sort((one, two) => Number(two.commentId) - Number(one.commentId));
            for (let comment of this._comments) {
                comment.replies.sort((one, two) => Number(two.replyId) - Number(one.replyId));
            }
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;
        this.sortComments(sortingType);
        for (let comment of this._comments) {
            result += `\n-- ${comment.commentId}. ${comment.username}: ${comment.content}`;
            for (let reply of comment.replies) {
                result += `\n--- ${reply.replyId}. ${reply.username}: ${reply.content}`;
            }
        }
        return result;
    }
}


module.exports = Story;