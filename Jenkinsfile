pipeline {
    agent any

    environment {
        PATH = "/Users/raksmeychann/.nvm/versions/node/v20.18.3/bin:/usr/local/bin:/usr/bin:$PATH"
    }

    stages {
        stage('Debug environment') {
            steps {
                sh '''
                  echo "=== Environment ==="
                  env
                  echo "=== PATH ==="
                  echo $PATH
                  echo "=== which node ==="
                  which node || echo "node not found"
                  echo "=== node -v ==="
                  node -v || echo "node command failed"
                '''
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rakcomputing/jenkinsapp.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed. Check above logs.'
        }
    }
}
