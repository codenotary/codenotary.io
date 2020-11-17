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
key2, value2 := []byte("client:Mr. Archibald Beatty"), []byte("Visa 6679499384784022 11/23")
verifiedIndex, err := client.SafeSet(ctx, key2, value2)
if err != nil {
	exit(err)
}
fmt.Println("   SafeSet - add and verify entry:")
printItem(key2, value2, verifiedIndex)
~~~

</i-tab>
<i-tab title="Get verified items">

~~~go
verifiedItem, err := client.SafeGet(ctx, key2)
if err != nil {
	exit(err)
}
fmt.Println("   SafeGet - fetch and verify entry:")
printItem(nil, nil, verifiedItem)
~~~

</i-tab>
    </i-tabs>
</i-column>
</i-row>
</i-container>
</page-section>
