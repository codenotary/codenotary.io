<page-section id="immudb-performance-section" :top="1">
	<i-container>
		<i-row>
			<i-column>
				<i-row>
					<i-column>
						<page-section-header title="Unmatched performance" :bottom="2">
							immudb can handle millions of writes per second. The following table shows performance of the embedded store inserting 1M entries on a 4-core E3-1275v6 CPU and SSD disk with 20-100 parallel workers:
						</page-section-header>
					</i-column>
				</i-row>
				<i-row>
					<i-column>
						<table>
							<thead>
								<tr>
									<th>Entries</th>
									<th>Workers</th>
									<th>Batch</th>
									<th>Batches</th>
									<th>Time(s)</th>
									<th>Entries/s</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1M</td>
									<td>20</td>
									<td>1000</td>
									<td>50</td>
									<td>1.061</td>
									<td>1.2M /s</td>
								</tr>
								<tr>
									<td>1M</td>
									<td>50</td>
									<td>1000</td>
									<td>20</td>
									<td>0.543</td>
									<td>1.8M /s</td>
								</tr>
								<tr>
									<td>1M</td>
									<td>100</td>
									<td>1000</td>
									<td>10</td>
									<td>0.615</td>
									<td>1.6M /s</td>
								</tr>
							</tbody>
						</table>
					</i-column>
				</i-row>
				<i-row>
					<i-column>
						<div class="options">
							<div class="option">
								4-core E3-1275v6 CPU
							</div>
							<div class="option">
								SSD disk
							</div>
						</div>
					</i-column>
				</i-row>
			</i-column>
		</i-row>
	</i-container>
</page-section>
