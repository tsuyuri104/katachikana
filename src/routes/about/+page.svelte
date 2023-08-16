<script lang="ts">
	import { locale, t } from '$lib/translations/translations';
</script>

<div class="wrapper">
	<div class="lang">
		<label
			for="langJa"
			class:active={$locale === 'ja'}
		>
			<input
				type="radio"
				name="lang"
				id="langJa"
				value="ja"
				bind:group={$locale}
			/>
			日本語
		</label>
		<label
			for="langEn"
			class:active={$locale === 'en'}
		>
			<input
				type="radio"
				name="lang"
				id="langEn"
				value="en"
				bind:group={$locale}
			/>
			English
		</label>
	</div>
	<article class="article">
		<h1 class="h1">KATA-CHI-KANA</h1>
		<section class="section">
			<h2 class="h2">{$t(`about.what-is-this.heading`)}</h2>
			<p class="p">{$t(`about.what-is-this.text.1`)}</p>
			<p class="p">{$t(`about.what-is-this.text.2`)}</p>
			<p class="p">{$t(`about.what-is-this.text.3`)}</p>
		</section>
		<section class="section">
			<h2 class="h2">{$t(`about.why-we-made-it.heading`)}</h2>
			<p class="p">{$t(`about.why-we-made-it.text.1`)}</p>
			<p class="p">{$t(`about.why-we-made-it.text.2`)}</p>
			<p class="p">{$t(`about.why-we-made-it.text.3`)}</p>
		</section>
		<section class="section">
			<h2 class="h2">{$t(`about.how-to-input.heading`)}</h2>
			<p class="p">{$t(`about.how-to-input.text.1`)}</p>
		</section>
		<section class="section">
			<h2 class="h2">{$t(`about.what-did-we-refer.heading`)}</h2>
			<p class="p">{$t(`about.what-did-we-refer.text.1`)}</p>
			<p class="p">{$t(`about.what-did-we-refer.text.2`)}</p>
		</section>
		<section class="section">
			<h2 class="h2">{$t(`about.contact.heading`)}</h2>
			<ul class="ul">
				<li class="li">
					<a
						class="a"
						href={$t(`about.contact.link.1.href`)}
					>
						{$t(`about.contact.link.1.text`)}</a
					>
				</li>
				<li class="li">
					<a
						class="a"
						href={$t(`about.contact.link.2.href`)}
					>
						{$t(`about.contact.link.2.text`)}</a
					>
				</li>
			</ul>
		</section>
	</article>
</div>

<style lang="scss">
	.wrapper {
		padding: 1em;
		display: grid;
		row-gap: 1.5em;
	}
	.lang {
		display: flex;
		flex-direction: row;
		justify-content: end;
		column-gap: 1em;
		color: #a1a7cc;
	}
	.active {
		color: #4a5ece;
	}
	.article {
		display: flex;
		flex-direction: column;
		row-gap: 1.8em;
	}
	.section {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
	}
	.h1 {
		font-size: 2.5em;
		text-align: center;
	}
	.h2 {
		color: #4a5ece;
		font-size: 1.5em;
	}
	.p {
		line-height: 1.5em;
	}
	.ul {
		display: flex;
		flex-direction: column;
		column-gap: 2em;
	}

	.a {
		color: #4a5ece;
		line-height: 1.5em;
	}
</style>
