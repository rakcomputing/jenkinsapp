pipeline {
    agent any

 

    stages {
    
        stage("Build") {
            steps {
                sh '''
                    echo "📦 Building Docker image..."
                    ls -la
                    docker buildx build -t reactjs_automat_deploy .
                '''
            }
        }

        stage("Check Container") {
            steps {
                sh '''
                    echo "🧼 Removing old container (if exists)..."
                    docker rm -f reactjs-cont || true
                    echo "✅ Done."
                '''
            }
        }

        stage("Deploy") {
            steps {
                sh '''
                    echo "🚀 Deploying container on port ${service_port}"
                    docker run -dp ${service_port}:3000 \
                        --name reactjs-cont \
                        reactjs_automat_deploy
                '''
            }
        }
 
    }
}
