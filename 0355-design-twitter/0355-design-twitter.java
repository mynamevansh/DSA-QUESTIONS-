class Twitter {

    class Tweet {
        int id;
        int time;

        Tweet(int id, int time) {
            this.id = id;
            this.time = time;
        }
    }

    class Node {
        int userId;
        int index;

        Node(int userId, int index) {
            this.userId = userId;
            this.index = index;
        }
    }

    Map<Integer, List<Tweet>> tweets;
    Map<Integer, Set<Integer>> following;
    int time;

    public Twitter() {
        tweets = new HashMap<>();
        following = new HashMap<>();
        time = 0;
    }

    public void postTweet(int userId, int tweetId) {
        tweets
            .computeIfAbsent(userId, k -> new ArrayList<>())
            .add(new Tweet(tweetId, time++));
    }

    public List<Integer> getNewsFeed(int userId) {

        List<Integer> result = new ArrayList<>();
        Set<Integer> users = new HashSet<>();

        users.add(userId);

        if (following.containsKey(userId)) {
            users.addAll(following.get(userId));
        }

        PriorityQueue<Node> pq = new PriorityQueue<>(
            (a, b) -> {
                Tweet tweetA = tweets.get(a.userId).get(a.index);
                Tweet tweetB = tweets.get(b.userId).get(b.index);

                return tweetB.time - tweetA.time;
            }
        );

        for (int user : users) {

            if (tweets.containsKey(user) && !tweets.get(user).isEmpty()) {

                int lastIndex = tweets.get(user).size() - 1;

                pq.offer(new Node(user, lastIndex));
            }
        }

        while (!pq.isEmpty() && result.size() < 10) {

            Node current = pq.poll();

            Tweet tweet = tweets
                .get(current.userId)
                .get(current.index);

            result.add(tweet.id);

            if (current.index > 0) {
                pq.offer(
                    new Node(
                        current.userId,
                        current.index - 1
                    )
                );
            }
        }

        return result;
    }

    public void follow(int followerId, int followeeId) {
        following
            .computeIfAbsent(followerId, k -> new HashSet<>())
            .add(followeeId);
    }

    public void unfollow(int followerId, int followeeId) {
        if (following.containsKey(followerId)) {
            following.get(followerId).remove(followeeId);
        }
    }
}