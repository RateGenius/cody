## Getting Started (PHP)

These instructions guide users through local machine setup for the PHP coding
challenge.

### Prerequisites

The only software needed to complete these coding challenges is [Docker](https://docs.docker.com/get-docker/), a
command-line shell, and a text editor ([Atom](https://atom.io/), [Sublime Text](http://www.sublimetext.com/), and
[Vim](https://www.vim.org/) are a few great options). You will also need to be connected to the internet in order to run
the `phpunit` command for the first time. Make sure Docker is installed before continuing:

```console
$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

### Installing

During this step, Docker will attempt to connect to the Internet and download the image dependencies for the `phpunit`
container. After the first command, Docker will use cached copies of the images and the commands will take less time to
run. From the project root directory, run the following command:

```console
$ bin/phpunit --version
PHPUnit 6.5.13 by Sebastian Bergmann, Julien Breux (Docker) and contributors.

```

## Code Challenges

### High Scores

Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games
of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list,
the last added score, and the top three and top five highest scores.

A HighScoreList accepts an array with one or more numbers, each representing one 'game score'. Run the unit tests with
the following command:

```console
$ ./bin/phpunit HighScores/
```

Please ensure that all unit tests are passing before submitting your solution.
