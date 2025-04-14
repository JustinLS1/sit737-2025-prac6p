# sit737-2025-prac6p

Most of the steps are being guided from the tutorial recording & Week 6 Workshop Files

    - Setup the Kubernetes Cluster

Step 1: Installed and activated Hyper V
Step 2: In Docker Desktop, navigate to settings then enable Kubernetes
Step 3: Deployed the Dashboard UI using VSC terminal powershell
Step 4: Created service account 'dashboard-adminuser.yaml'
Step 5: Created ClusterRoleBinding 'cluster_role_binding.yaml'
Step 6: Login to dashboard UI using the Token received from command line

    - Create the Docker Image

Step 1: Created a new docker image for this task 'justinls1/calculator:latest' and pushed to docker desktop

    - Create the Kubernetes Deployment

Step 1: Copied the three files from the PPT and copy paste it into VSC for further changes
Step 2: For createPod.yaml, createReplicaSet.yaml and createDeployment.yaml: changed the image & port fields to fit according to the docker image with 'justinls1/calculator:latest' & '3000'
        (I had it running on 8080 as per tutorial, but it provides errors & when i changed it to 3000, it seems to work smoothly compared to 8080 so i changed it)
Step 3: After adjustments, copy all three files and upload it to Dashboard UI
Step 4: Ensure all Workload status are green

    - Create the Kubernetes Service
(I do not know whether the tutorial covered the service part but I did my own learning and did it according to my understanding)

Step 1: After all Workload status went green on all pods, replicas and deployments, I went to google to find out how to create the Kubernetes Service
Step 2: I used "https://kubernetes.io/docs/concepts/services-networking/service/" as my guide for making the createService.yaml and adjusted the image and port fields with the selector running to the existing pod
Step 3: On terminal, I executed 'kubectl apply -f createService.yaml' to apply into Kubernetes UI
Step 4: Using 'kubectl get services' to see whether the service got applied
(From what I understand, this should be completed in creating the service configuration files for it but I am not sure)