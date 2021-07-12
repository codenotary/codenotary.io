<page-section id="immudb-easy-setup-section">
<i-container>
<i-row>
    <i-column>
        <page-section-header title="Easy setup" color="white" :bottom="0"></page-section-header>
    </i-column>
</i-row>
<i-row class="_padding-x-0 _display-flex _justify-content-center">
<i-column class="_margin-top-2 _margin-x-auto" xs="12" sm="12" md="8" lg="8">
    <span class="cn-text-white">
		Build Docker images based on the Dockerfiles in the GitHub repository
		for the most common architectures or use the prebuild ones on Dockerhub for Linux.
	</span>
</i-column>
</i-row>
<i-row class="_padding-x-0 _display-flex _justify-content-center">
<i-row class="_padding-x-0 _display-flex _justify-content-center">
<i-column class="_margin-top-2 _margin-x-auto" xs="12" sm="12" md="8" lg="8">

~~~bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
~~~

</i-column>
</i-row>
<i-row class="_padding-x-0 _display-flex _justify-content-center">
<i-column class="_margin-top-2 _margin-x-auto" xs="12" sm="12" md="8" lg="8">
	<p class="action _display-flex _flex-direction-row _justify-content-center">
		<cn-button
			variant="secondary"
			href="https://docs.immudb.io"
			target="_blank"
			rel="nofollow"
			size="lg"
		>
			Documentation
		</cn-button>
	</p>
</i-column>
</i-row>
</i-container>
</page-section>
