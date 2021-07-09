<page-section id="immudb-easy-setup-section" style="padding-top: 260px !important;">
<i-container>
<i-row>
    <i-column>
        <page-section-header title="Easy setup" color="white" :bottom="0">
            <span class="cn-text-white">
							Build Docker images based on the Dockerfiles in the GitHub repository
							for the most common architectures or use the prebuild ones on Dockerhub for Linux.
						</span>
        </page-section-header>
    </i-column>
</i-row>
<i-row>
<i-column>

~~~bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
~~~

</i-column>
</i-row>
<i-row>
<i-column>
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
