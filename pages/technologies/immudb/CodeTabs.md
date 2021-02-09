<page-section id="immudb-code-tabs-section">
<page-section-header title="By developers, for developers">
    We have carefully designed immudb to be the one-stop intuitive immutable database solution, simple to write and simple to use.
</page-section-header>
<i-container>
<i-row>
<i-column>
<i-tabs custom>
<i-tab title="Connect to immudb">

~~~go
client, err := immuclient.NewImmuClient(immuclient.DefaultOptions())
 if err != nil {
	exit(err)
 }
ctx := context.Background()
~~~

</i-tab>
<i-tab title="Store verified items">

~~~go
key, value := []byte("client:Mr. Archibald Beatty"), []byte("Visa 6679499384784022 11/23")
tx, err := client.VerifiedSet(ctx, key, value)
if err != nil {
	exit(err)
}
fmt.Printf("VerifiedSet - entry successfully committed and verified: %v", tx)
~~~

</i-tab>
<i-tab title="Get verified items">

~~~go
vEntry, err := client.VerifiedGet(ctx, key)
if err != nil {
	exit(err)
}
fmt.Printf("VerifiedGet - entry was found and verified: %v", vEntry)
~~~

</i-tab>
    </i-tabs>
</i-column>
</i-row>
</i-container>
</page-section>
