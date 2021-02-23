<PageSection id="immudb-easy-setup-section">
<i-container>
<i-row>
    <i-column>
        <PageSectionHeader title="Easy setup">
            Build Docker images based on the Dockerfiles in the GitHub repository
            for the most common architectures or use the prebuild ones on Dockerhub for Linux.
        </PageSectionHeader>
    </i-column>
</i-row>
<i-row>
<i-column>

~~~bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
~~~

</i-column>
</i-row>
</i-container>    
</PageSection>