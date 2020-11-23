#!/bin/sh

cd ..

echo "#!/bin/sh" > .git/hooks/post-merge
echo "java -jar InstanceSync.jar" >> .git/hooks/post-merge

echo "Done setting up hooks"
echo "Running InstanceSync"

/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java -jar InstanceSync.jar