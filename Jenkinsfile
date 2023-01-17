node {
    checkout scm

    def customImage = docker.build("reactapp")

    customImage.inside {
        sh 'make test'
    }
}
