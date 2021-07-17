#!/bin/sh

cd ..
echo "#!/bin/sh" > .git/hooks/post-merge
echo "java -jar InstanceSync.jar" >> .git/hooks/post-merge

echo "Done setting up hooks"
echo "Running InstanceSync"

java -jar InstanceSync.jar