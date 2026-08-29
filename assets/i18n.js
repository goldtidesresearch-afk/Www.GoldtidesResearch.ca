// assets/i18n.js
// Shared translation engine for Goldtide Research (EN / FR / ES).
// Loaded on every page. Persists the chosen language in localStorage so it
// carries across pages, and applies translations instantly without a reload.

(function () {
  const STORAGE_KEY = 'goldtideLang';

  // ---------- Category name/description translations ----------
  window.CATEGORY_I18N = {
    weight: {
      fr: { name: "Perte de Poids et Métabolisme", desc: "Composés étudiés dans les voies métaboliques et liées au poids." },
      es: { name: "Pérdida de Peso y Metabolismo", desc: "Compuestos estudiados en vías metabólicas y relacionadas con el peso." },
    },
    blends: {
      fr: { name: "Mélanges et Protocoles", desc: "Flacons multi-composés combinant des mécanismes complémentaires." },
      es: { name: "Mezclas y Protocolos", desc: "Viales multicompuestos que combinan mecanismos complementarios." },
    },
    repair: {
      fr: { name: "Réparation et Récupération", desc: "Composés étudiés dans les modèles de réparation tissulaire et de récupération." },
      es: { name: "Reparación y Recuperación", desc: "Compuestos estudiados en modelos de reparación de tejidos y recuperación." },
    },
    gh: {
      fr: { name: "Hormone de Croissance", desc: "Sécrétagogues étudiés pour les voies de libération de l'hormone de croissance." },
      es: { name: "Hormona del Crecimiento", desc: "Secretagogos estudiados por las vías de liberación de la hormona del crecimiento." },
    },
    cognitive: {
      fr: { name: "Cognitif et Nootropique", desc: "Composés étudiés pour la concentration, la mémoire et le calme." },
      es: { name: "Cognitivo y Nootrópico", desc: "Compuestos estudiados por la concentración, la memoria y la calma." },
    },
    longevity: {
      fr: { name: "Longévité", desc: "Bio-régulateurs étudiés dans la recherche sur le vieillissement cellulaire." },
      es: { name: "Longevidad", desc: "Biorreguladores estudiados en la investigación del envejecimiento celular." },
    },
    hormonal: {
      fr: { name: "Sexuel et Hormonal", desc: "Composés étudiés dans les voies endocriniennes et d'excitation." },
      es: { name: "Sexual y Hormonal", desc: "Compuestos estudiados en vías endocrinas y de excitación." },
    },
    cosmetic: {
      fr: { name: "Esthétique et Cosmétique", desc: "Composés étudiés pour la peau, les cheveux et l'apparence." },
      es: { name: "Estético y Cosmético", desc: "Compuestos estudiados para la piel, el cabello y la apariencia." },
    },
    supplements: {
      fr: { name: "Fournitures et Cofacteurs", desc: "Solvants, tampons et composés cofacteurs pour la manipulation des flacons de recherche." },
      es: { name: "Suministros y Cofactores", desc: "Disolventes, tampones y compuestos cofactores para el manejo de viales de investigación." },
    },
  };

  // ---------- Product blurb translations, keyed by product name ----------
  window.PRODUCT_I18N = {
    "5-Amino-1MQ": {
      fr: "Un composé de la voie NNMT étudié dans des modèles de métabolisme des cellules adipeuses.",
      es: "Un compuesto de la vía NNMT estudiado en modelos de metabolismo de células grasas.",
    },
    "AOD-9604": {
      fr: "Un fragment modifié de l'hormone de croissance étudié indépendamment de la cascade GH plus large.",
      es: "Un fragmento modificado de la hormona del crecimiento estudiado aparte de la cascada GH más amplia.",
    },
    "Cagrilintide": {
      fr: "Un composé analogue à l'amyline étudié aux côtés des voies GLP-1 pour la recherche sur la satiété.",
      es: "Un compuesto análogo a la amilina estudiado junto a las vías GLP-1 para la investigación de la saciedad.",
    },
    "MOTS-c": {
      fr: "Un peptide d'origine mitochondriale étudié pour l'activation de l'AMPK.",
      es: "Un péptido de origen mitocondrial estudiado por la activación de AMPK.",
    },
    "Retatrutide": {
      fr: "Un composé triple agoniste étudié de manière approfondie dans la recherche sur le poids.",
      es: "Un compuesto triple agonista ampliamente estudiado en la investigación sobre el peso.",
    },
    "SS-31": {
      fr: "Un composé ciblant les mitochondries étudié dans des modèles de stress oxydatif.",
      es: "Un compuesto dirigido a las mitocondrias estudiado en modelos de estrés oxidativo.",
    },
    "GLOW": {
      fr: "Un mélange de trois composés étudié pour la peau, les cheveux et la réparation tissulaire.",
      es: "Una mezcla de tres compuestos estudiada para la piel, el cabello y la reparación de tejidos.",
    },
    "HHB": {
      fr: "Un mélange de neuf vitamines B et de choline conçu pour la recherche sur les cofacteurs.",
      es: "Una mezcla de nueve vitaminas B y colina diseñada para la investigación de cofactores.",
    },
    "KLOW": {
      fr: "Un mélange de quatre composés étudié dans des modèles d'inflammation intestinale, articulaire et cutanée.",
      es: "Una mezcla de cuatro compuestos estudiada en modelos de inflamación intestinal, articular y cutánea.",
    },
    "Semax + Selank Blend": {
      fr: "Un mélange combiné associant deux neuropeptides étudiés en Russie.",
      es: "Una mezcla combinada que empareja dos neuropéptidos estudiados en Rusia.",
    },
    "SHB": {
      fr: "Un mélange de neuf acides aminés et de NAC pour la recherche sur les voies combinées.",
      es: "Una mezcla de nueve aminoácidos y NAC para la investigación de vías combinadas.",
    },
    "Wolverine (BPC-157 + TB-500)": {
      fr: "Un flacon pré-combiné de deux des peptides de réparation les plus étudiés.",
      es: "Un vial pre-combinado de dos de los péptidos de reparación más estudiados.",
    },
    "BPC-157": {
      fr: "L'un des peptides de réparation les plus étudiés, examiné pour l'angiogenèse et la signalisation tendineuse.",
      es: "Uno de los péptidos de reparación más estudiados, examinado por la angiogénesis y la señalización tendinosa.",
    },
    "GHK-Cu": {
      fr: "Un tripeptide de cuivre étudié pour son rôle dans l'activation de l'expression des gènes liés à la réparation.",
      es: "Un tripéptido de cobre estudiado por su papel en la activación de la expresión génica relacionada con la reparación.",
    },
    "KPV": {
      fr: "Un fragment tripeptidique étudié pour la signalisation anti-inflammatoire.",
      es: "Un fragmento tripeptídico estudiado por la señalización antiinflamatoria.",
    },
    "TB-500": {
      fr: "Un fragment synthétique étudié pour la réparation globale et la signalisation vasculaire.",
      es: "Un fragmento sintético estudiado para la reparación de todo el cuerpo y la señalización vascular.",
    },
    "CJC-1295 (No DAC) + Ipamorelin": {
      fr: "Un protocole combiné GHRH/GHRP étudié pour la libération pulsatile de GH.",
      es: "Un protocolo combinado GHRH/GHRP estudiado para la liberación pulsátil de GH.",
    },
    "Ipamorelin": {
      fr: "Un GHRP sélectif étudié pour la libération de GH sans élévation du cortisol ni de la prolactine.",
      es: "Un GHRP selectivo estudiado por la liberación de GH sin elevación de cortisol o prolactina.",
    },
    "Sermorelin": {
      fr: "Le composé analogue GHRH original, étudié depuis ses débuts en usage clinique.",
      es: "El compuesto análogo de GHRH original, estudiado desde sus primeros usos clínicos.",
    },
    "Tesamorelin": {
      fr: "Un analogue GHRH étudié spécifiquement dans la recherche sur la graisse viscérale.",
      es: "Un análogo de GHRH estudiado específicamente en la investigación de grasa visceral.",
    },
    "DSIP": {
      fr: "Un peptide étudié pour son influence sur l'architecture du sommeil à ondes lentes.",
      es: "Un péptido estudiado por su influencia en la arquitectura del sueño de ondas lentas.",
    },
    "Selank": {
      fr: "Un peptide anxiolytique étudié en Russie, examiné pour ses effets calmants sans sédation.",
      es: "Un péptido ansiolítico estudiado en Rusia, examinado por sus efectos calmantes sin sedación.",
    },
    "Semax": {
      fr: "Un neuropeptide étudié pour la concentration, la mémoire et les voies neuroprotectrices.",
      es: "Un neuropéptido estudiado por la concentración, la memoria y las vías neuroprotectoras.",
    },
    "Epithalon": {
      fr: "Un bio-régulateur lié à la télomérase, parmi les peptides de longévité les plus étudiés.",
      es: "Un biorregulador relacionado con la telomerasa, entre los péptidos de longevidad más estudiados.",
    },
    "Pinealon": {
      fr: "Un court tripeptide étudié dans la recherche sur le vieillissement ciblant le cerveau.",
      es: "Un tripéptido corto estudiado en la investigación del envejecimiento dirigida al cerebro.",
    },
    "Thymosin Alpha-1": {
      fr: "Un peptide immuno-régulateur étudié et approuvé sous d'autres noms dans des dizaines de pays.",
      es: "Un péptido inmunorregulador estudiado y aprobado bajo otros nombres en docenas de países.",
    },
    "HCG": {
      fr: "Un composé mimétique de la LH étudié dans la recherche sur la voie de la testostérone.",
      es: "Un compuesto mimético de LH estudiado en la investigación de la vía de la testosterona.",
    },
    "Kisspeptin-10": {
      fr: "Un composé étudié pour son rôle dans l'activation de la propre cascade LH/FSH de l'organisme.",
      es: "Un compuesto estudiado por su papel en la activación de la propia cascada LH/FSH del cuerpo.",
    },
    "Melanotan I": {
      fr: "Un agoniste sélectif de la mélanocortine étudié dans la recherche sur la pigmentation.",
      es: "Un agonista selectivo de melanocortina estudiado en la investigación de pigmentación.",
    },
    "Melanotan II": {
      fr: "Un agoniste plus large de la mélanocortine, et le composé parent du PT-141.",
      es: "Un agonista de melanocortina más amplio, y el compuesto original del PT-141.",
    },
    "PT-141": {
      fr: "Un agoniste de la mélanocortine étudié pour les voies d'excitation du système nerveux central.",
      es: "Un agonista de melanocortina estudiado por las vías de excitación del sistema nervioso central.",
    },
    "AHK-Cu": {
      fr: "Un peptide de cuivre étudié dans la recherche sur les follicules pileux.",
      es: "Un péptido de cobre estudiado en la investigación de folículos capilares.",
    },
    "SNAP-8": {
      fr: "Un octapeptide topique étudié pour son effet sur la formation des rides d'expression.",
      es: "Un octapéptido tópico estudiado por su efecto en la formación de líneas de expresión.",
    },
    "Acetic Acid": {
      fr: "Un solvant stérile à 0,6 % utilisé pour reconstituer les composés de la famille IGF-1.",
      es: "Un disolvente estéril al 0.6% utilizado para reconstituir compuestos de la familia IGF-1.",
    },
    "Bacteriostatic Water": {
      fr: "Le solvant standard à 0,9 % d'alcool benzylique pour reconstituer les composés lyophilisés.",
      es: "El disolvente estándar de alcohol bencílico al 0.9% para reconstituir compuestos liofilizados.",
    },
    "Glutathione": {
      fr: "Un composé antioxydant étudié pour les voies redox et de détoxification.",
      es: "Un compuesto antioxidante estudiado por las vías redox y de desintoxicación.",
    },
    "Melatonin": {
      fr: "Le composé de signalisation circadienne, préparé ici sous forme de flacon de recherche injectable.",
      es: "El compuesto de señalización circadiana, preparado aquí como un vial de investigación inyectable.",
    },
    "NAD Buffer": {
      fr: "Une formulation de NAD+ tamponnée en pH étudiée pour réduire l'irritation au site d'injection.",
      es: "Una formulación de NAD+ tamponada en pH estudiada para reducir la irritación en el sitio de inyección.",
    },
    "NAD+": {
      fr: "Une coenzyme centrale à la recherche sur l'énergie cellulaire, connue pour décliner avec l'âge.",
      es: "Una coenzima central para la investigación de energía celular, conocida por disminuir con la edad.",
    },
    "Vitamin B12": {
      fr: "Un cofacteur de méthylation étudié aux côtés des voies nerveuses et des globules rouges.",
      es: "Un cofactor de metilación estudiado junto a las vías nerviosas y de glóbulos rojos.",
    },
  };

  window.LIBRARY_I18N = {
    "5-Amino-1MQ": {
      fr: "Un composé de la classe des inhibiteurs de NNMT, étudié en recherche métabolique pour son rôle dans la régulation cellulaire du NAD+ et le métabolisme énergétique des cellules adipeuses.",
      es: "Un compuesto de la clase de inhibidores de NNMT, estudiado en investigación metabólica por su papel en la regulación celular del NAD+ y el metabolismo energético de las células grasas.",
    },
    "AOD-9604": {
      fr: "Un fragment modifié de l'hormone de croissance humaine (acides aminés 176-191), étudié isolément du reste de la molécule GH pour ses effets spécifiques sur le métabolisme des graisses.",
      es: "Un fragmento modificado de la hormona del crecimiento humana (aminoácidos 176-191), estudiado de forma aislada del resto de la molécula GH por sus efectos específicos en el metabolismo de las grasas.",
    },
    "Cagrilintide": {
      fr: "Un analogue de l'amyline à action prolongée, étudié aux côtés des voies agonistes du GLP-1 pour son rôle dans la signalisation de la satiété.",
      es: "Un análogo de la amilina de acción prolongada, estudiado junto a las vías agonistas de GLP-1 por su papel en la señalización de la saciedad.",
    },
    "MOTS-c": {
      fr: "Un peptide d'origine mitochondriale codé par l'ADN mitochondrial, étudié pour son rôle dans l'activation de l'AMPK, un régulateur central du métabolisme énergétique cellulaire.",
      es: "Un péptido de origen mitocondrial codificado por el ADN mitocondrial, estudiado por su papel en la activación de AMPK, un regulador central del metabolismo energético celular.",
    },
    "Retatrutide": {
      fr: "Un composé triple agoniste agissant simultanément sur les voies des récepteurs GIP, GLP-1 et glucagon, l'un des composés les plus étudiés dans la recherche métabolique actuelle.",
      es: "Un compuesto triple agonista que actúa simultáneamente sobre las vías de los receptores GIP, GLP-1 y glucagón, uno de los compuestos más estudiados en la investigación metabólica actual.",
    },
    "SS-31": {
      fr: "Un peptide ciblant les mitochondries qui se concentre dans la membrane mitochondriale interne, étudié dans des modèles de stress oxydatif et d'énergie cellulaire.",
      es: "Un péptido dirigido a las mitocondrias que se concentra en la membrana mitocondrial interna, estudiado en modelos de estrés oxidativo y energía celular.",
    },
    "GLOW": {
      fr: "Un mélange de trois composés associant des peptides réparateurs à un tripeptide de cuivre, étudié dans des modèles de recherche sur la peau, les cheveux et la réparation tissulaire.",
      es: "Una mezcla de tres compuestos que combina péptidos reparadores con un tripéptido de cobre, estudiada en modelos de investigación sobre la piel, el cabello y la reparación de tejidos.",
    },
    "HHB": {
      fr: "Un mélange de neuf vitamines B et de choline, formulé comme flacon de soutien en cofacteurs pour la recherche sur la méthylation et les voies métaboliques.",
      es: "Una mezcla de nueve vitaminas B y colina, formulada como un vial de apoyo de cofactores para la investigación de metilación y vías metabólicas.",
    },
    "KLOW": {
      fr: "Un mélange de quatre composés étudié ensemble dans des modèles de recherche sur l'inflammation intestinale, articulaire et cutanée.",
      es: "Una mezcla de cuatro compuestos estudiada en conjunto en modelos de investigación de inflamación intestinal, articular y cutánea.",
    },
    "Semax + Selank Blend": {
      fr: "Un flacon combiné associant deux neuropeptides développés en Russie, étudiés ensemble pour leurs effets qui se recoupent sur les voies cognitives et anxiolytiques.",
      es: "Un vial combinado que empareja dos neuropéptidos desarrollados en Rusia, estudiados juntos por sus efectos superpuestos en las vías cognitivas y ansiolíticas.",
    },
    "SHB": {
      fr: "Un mélange de neuf acides aminés et de NAC (N-acétylcystéine), formulé pour la recherche combinée sur les voies antioxydantes et cofactorielles.",
      es: "Una mezcla de nueve aminoácidos y NAC (N-acetilcisteína), formulada para la investigación combinada de vías antioxidantes y de cofactores.",
    },
    "Wolverine (BPC-157 + TB-500)": {
      fr: "Un flacon pré-combiné réunissant deux des peptides réparateurs les plus étudiés, conditionnés ensemble pour la recherche sur la réparation tissulaire de tout le corps.",
      es: "Un vial pre-combinado que reúne dos de los péptidos reparadores más estudiados, empaquetados juntos para la investigación de reparación de tejidos de todo el cuerpo.",
    },
    "BPC-157": {
      fr: "Un fragment synthétique dérivé d'une protéine présente dans le suc gastrique. L'un des peptides réparateurs les plus étudiés, examiné pour son rôle dans l'angiogenèse et la signalisation de guérison tendineuse.",
      es: "Un fragmento sintético derivado de una proteína presente en el jugo gástrico. Uno de los péptidos reparadores más estudiados, examinado por su papel en la angiogénesis y la señalización de curación tendinosa.",
    },
    "GHK-Cu": {
      fr: "Un tripeptide de cuivre naturellement présent, étudié pour son rôle dans l'activation de gènes associés à la réparation tissulaire et à la production de collagène.",
      es: "Un tripéptido de cobre de origen natural, estudiado por su papel en la activación de genes asociados con la reparación de tejidos y la producción de colágeno.",
    },
    "KPV": {
      fr: "Un fragment tripeptidique de l'alpha-MSH, étudié pour la signalisation anti-inflammatoire, indépendamment des autres effets de l'hormone parente.",
      es: "Un fragmento tripeptídico de la alfa-MSH, estudiado por la señalización antiinflamatoria, independientemente de los otros efectos de la hormona original.",
    },
    "TB-500": {
      fr: "Un fragment synthétique de la thymosine bêta-4, étudié pour la signalisation de réparation de tout le corps et son rôle dans la migration cellulaire et la formation vasculaire.",
      es: "Un fragmento sintético de la timosina beta-4, estudiado por la señalización de reparación de todo el cuerpo y su papel en la migración celular y la formación vascular.",
    },
    "CJC-1295 (No DAC) + Ipamorelin": {
      fr: "Un protocole combiné GHRH/GHRP associant un analogue de l'hormone de libération de l'hormone de croissance à un sécrétagogue sélectif, étudiés ensemble pour les profils de libération pulsatile de l'hormone de croissance.",
      es: "Un protocolo combinado GHRH/GHRP que empareja un análogo de la hormona liberadora de hormona del crecimiento con un secretagogo selectivo, estudiados juntos por los patrones de liberación pulsátil de la hormona del crecimiento.",
    },
    "Ipamorelin": {
      fr: "Un peptide sélectif de libération de l'hormone de croissance (GHRP), étudié pour stimuler la libération de GH sans l'élévation du cortisol ou de la prolactine observée avec les sécrétagogues de génération antérieure.",
      es: "Un péptido selectivo de liberación de hormona del crecimiento (GHRP), estudiado por estimular la liberación de GH sin la elevación de cortisol o prolactina observada con secretagogos de generaciones anteriores.",
    },
    "Sermorelin": {
      fr: "Un analogue de la GHRH représentant les 29 premiers acides aminés de l'hormone de libération de l'hormone de croissance — parmi les premiers sécrétagogues étudiés et utilisés en clinique.",
      es: "Un análogo de GHRH que representa los primeros 29 aminoácidos de la hormona liberadora de hormona del crecimiento — entre los primeros secretagogos estudiados y usados clínicamente.",
    },
    "Tesamorelin": {
      fr: "Un analogue GHRH stabilisé, étudié spécifiquement dans la recherche sur la graisse viscérale et l'un des rares composés de cette classe à posséder un historique de recherche clinique établi.",
      es: "Un análogo de GHRH estabilizado, estudiado específicamente en la investigación de grasa visceral y uno de los pocos compuestos de esta clase con un historial de investigación clínica establecido.",
    },
    "DSIP": {
      fr: "Le peptide induisant le sommeil delta, isolé pour la première fois du tissu cérébral de lapin, étudié pour son influence sur l'architecture du sommeil à ondes lentes.",
      es: "El péptido inductor del sueño delta, aislado por primera vez del tejido cerebral de conejo, estudiado por su influencia en la arquitectura del sueño de ondas lentas.",
    },
    "Selank": {
      fr: "Un analogue synthétique d'un peptide immunomodulateur naturel, étudié dans la recherche russe pour ses effets anxiolytiques sans la sédation associée aux benzodiazépines.",
      es: "Un análogo sintético de un péptido inmunomodulador natural, estudiado en investigación rusa por sus efectos ansiolíticos sin la sedación asociada con las benzodiazepinas.",
    },
    "Semax": {
      fr: "Un peptide synthétique dérivé de l'ACTH, étudié pour ses effets sur la concentration, la consolidation de la mémoire et les voies neuroprotectrices du système nerveux central.",
      es: "Un péptido sintético derivado de la ACTH, estudiado por sus efectos en la concentración, la consolidación de la memoria y las vías neuroprotectoras del sistema nervioso central.",
    },
    "Epithalon": {
      fr: "Un tétrapeptide synthétique étudié pour son rôle proposé dans l'activation de la télomérase — parmi les composés les plus étudiés dans la recherche sur les peptides de longévité.",
      es: "Un tetrapéptido sintético estudiado por su papel propuesto en la activación de la telomerasa — entre los compuestos más estudiados en la investigación de péptidos de longevidad.",
    },
    "Pinealon": {
      fr: "Un court tripeptide étudié dans la recherche sur le vieillissement ciblant le cerveau, proposé pour soutenir la fonction régulatrice neuronale.",
      es: "Un tripéptido corto estudiado en la investigación del envejecimiento dirigida al cerebro, propuesto para apoyar la función reguladora neuronal.",
    },
    "Thymosin Alpha-1": {
      fr: "Un peptide immuno-régulateur ayant un long historique de recherche et clinique, étudié et approuvé sous d'autres noms dans de nombreux pays pour la recherche sur la modulation immunitaire.",
      es: "Un péptido inmunorregulador con un largo historial de investigación y clínico, estudiado y aprobado bajo otros nombres en numerosos países para la investigación de modulación inmunitaria.",
    },
    "HCG": {
      fr: "La gonadotrophine chorionique humaine, une hormone glycoprotéique qui imite l'hormone lutéinisante (LH), étudiée dans la recherche sur la voie de la testostérone et l'endocrinologie reproductive.",
      es: "La Gonadotropina Coriónica Humana, una hormona glicoproteica que imita a la hormona luteinizante (LH), estudiada en la investigación de la vía de la testosterona y la endocrinología reproductiva.",
    },
    "Kisspeptin-10": {
      fr: "Un fragment du peptide kisspeptine, étudié pour son rôle d'activateur en amont de la propre cascade de libération LH/FSH de l'organisme.",
      es: "Un fragmento del péptido kisspeptina, estudiado por su papel como activador previo de la propia cascada de liberación de LH/FSH del cuerpo.",
    },
    "Melanotan I": {
      fr: "Un agoniste sélectif du récepteur mélanocortine-1, étudié spécifiquement dans la recherche sur la pigmentation.",
      es: "Un agonista selectivo del receptor de melanocortina-1, estudiado específicamente en la investigación de pigmentación.",
    },
    "Melanotan II": {
      fr: "Un agoniste plus large des récepteurs de la mélanocortine affectant plusieurs sous-types de récepteurs, et le composé parent dont est dérivé le PT-141.",
      es: "Un agonista más amplio de los receptores de melanocortina que afecta a múltiples subtipos de receptores, y el compuesto original del cual se derivó el PT-141.",
    },
    "PT-141": {
      fr: "La bréméIanotide, un agoniste de la mélanocortine étudié pour les voies du système nerveux central liées à l'excitation, distinct du mécanisme vasculaire utilisé par d'autres approches dans ce domaine de recherche.",
      es: "Bremelanotida, un agonista de melanocortina estudiado por las vías del sistema nervioso central relacionadas con la excitación, distinto del mecanismo vascular utilizado por otros enfoques en esta área de investigación.",
    },
    "AHK-Cu": {
      fr: "Un tripeptide de cuivre apparenté au GHK-Cu, étudié spécifiquement dans la recherche sur les follicules pileux.",
      es: "Un tripéptido de cobre relacionado con el GHK-Cu, estudiado específicamente en la investigación de folículos capilares.",
    },
    "SNAP-8": {
      fr: "Un octapeptide topique, étudié pour son effet sur les voies de contraction musculaire liées à la formation des rides d'expression.",
      es: "Un octapéptido tópico, estudiado por su efecto en las vías de contracción muscular relacionadas con la formación de líneas de expresión.",
    },
    "Acetic Acid": {
      fr: "Un diluant stérile à 0,6 % utilisé spécifiquement pour reconstituer les composés de la famille IGF-1, moins stables dans l'eau bactériostatique seule.",
      es: "Un diluyente estéril al 0.6% utilizado específicamente para reconstituir compuestos de la familia IGF-1, que son menos estables solo en agua bacteriostática.",
    },
    "Bacteriostatic Water": {
      fr: "De l'eau stérile contenant 0,9 % d'alcool benzylique comme conservateur — le diluant standard pour reconstituer la plupart des peptides de recherche lyophilisés.",
      es: "Agua estéril que contiene 0.9% de alcohol bencílico como conservante — el diluyente estándar para reconstituir la mayoría de los péptidos de investigación liofilizados.",
    },
    "Glutathione": {
      fr: "Le principal antioxydant intracellulaire de l'organisme, étudié ici sous forme injectable de recherche pour les voies redox et de détoxification.",
      es: "El principal antioxidante intracelular del cuerpo, estudiado aquí en un formato inyectable de investigación para las vías redox y de desintoxicación.",
    },
    "Melatonin": {
      fr: "L'hormone principale de signalisation circadienne, préparée ici sous forme de flacon de recherche injectable plutôt que sous la forme orale plus courante.",
      es: "La hormona principal de señalización circadiana, preparada aquí como un vial de investigación inyectable en lugar de la forma oral más común.",
    },
    "NAD Buffer": {
      fr: "Une formulation de NAD+ tamponnée en pH, développée pour réduire l'irritation au site d'injection associée aux solutions de NAD+ standard.",
      es: "Una formulación de NAD+ tamponada en pH, desarrollada para reducir la irritación en el sitio de inyección asociada con las soluciones estándar de NAD+.",
    },
    "NAD+": {
      fr: "Une coenzyme centrale au métabolisme énergétique cellulaire dans presque tous les types de cellules, un composé connu pour décliner naturellement avec l'âge — un moteur majeur de l'intérêt actuel pour la recherche sur la longévité.",
      es: "Una coenzima central para el metabolismo energético celular en casi todos los tipos de células, un compuesto conocido por disminuir naturalmente con la edad — un motor importante del interés actual en la investigación de longevidad.",
    },
    "Vitamin B12": {
      fr: "Un cofacteur de méthylation, étudié aux côtés des voies de la fonction nerveuse et de la production de globules rouges.",
      es: "Un cofactor de metilación, estudiado junto a las vías de la función nerviosa y la producción de glóbulos rojos.",
    },
  };

  function getLibraryText(name, englishFallback) {
    const lang = getLang();
    if (lang === 'en') return englishFallback;
    const entry = window.LIBRARY_I18N[name];
    return (entry && entry[lang]) || englishFallback;
  }
  window.getLibraryText = getLibraryText;

  // ---------- Shared UI string translations ----------
  window.UI_I18N = {
    en: {
      "nav.shop": "Shop", "nav.catalog": "Catalog", "nav.stacks": "Stacks", "nav.purity": "Purity", "nav.about": "About", "nav.faq": "FAQ", "nav.cart": "Cart",
      "nav.backToShop": "← Back to Shop",
      "cart.title": "Your Cart", "cart.empty": "Your cart is empty. Browse the catalog to add compounds.",
      "cart.subtotal": "Subtotal", "cart.checkout": "Continue to Checkout →", "cart.preview": "Design preview — connect your checkout provider to make this functional.",
      "hero.eyebrow": "Precision · Purity · Performance",
      "hero.title1": "Research-grade compounds,", "hero.title2": "poured with precision.",
      "hero.body": "Goldtide Research supplies HPLC-verified compounds for laboratory and in-vitro research, with a batch record behind every vial. Shipped from Canada, priced in CAD. Strictly for research use — not for human or veterinary consumption.",
      "hero.browseCatalog": "Browse the Catalog", "hero.viewCoa": "View the COA Library",
      "stat.compounds": "Compounds In Stock", "stat.purity": "HPLC-Verified Purity", "stat.ruo": "Research Use Only", "stat.shipped": "Shipped From Canada",
      "catalog.eyebrow": "The Catalog", "catalog.title": "40 compounds. Nine categories. One purity standard.",
      "catalog.body": "Every compound below is HPLC-tested to ≥99% and shipped lyophilized to hold potency. Research use only.",
      "popular.eyebrow": "Most Popular", "popular.title": "Our top 10",
      "stacks.eyebrow": "Popular Pairings", "stacks.title": "Common stacks", "stacks.body": "Compounds our researchers order together most often.",
      "supplies.eyebrow": "Injection Supplies", "supplies.title": "Reconstitution & handling", "supplies.body": "Pens, tips, wipes and sterile solvents for handling research compounds. Not counted in the 40.",
      "guide.eyebrow": "New To Research Peptides?", "guide.title": "The Goldtide Reference Guide",
      "guide.body": "How to read a COA, reconstitution and storage basics, and a plain-language glossary of everything we carry — free, on-page.",
      "guide.cta": "Read the Guide →",
      "verify.eyebrow": "How We Verify", "verify.title": "Every vial answers to a batch record.", "verify.body": "The standard we hold every compound to before it ships.",
      "verify.hplc.title": "HPLC-Verified", "verify.hplc.body": "Every batch is run against a high-performance liquid chromatography standard before it's listed.",
      "verify.third.title": "Third-Party Tested", "verify.third.body": "Independent lab analysis backs every purity claim we publish — nothing is graded in-house alone.",
      "verify.coa.title": "COA On File", "verify.coa.body": "A certificate of analysis is kept for every batch and made available on request.",
      "verify.quote": "Goldtide Research was built on a simple premise: researchers deserve a supplier that treats purity as non-negotiable, documentation as standard, and every vial as a promise kept — batch after batch.",
      "verify.tagline": "Science · Quality · Integrity",
      "cta.title": "Ready to see the full catalog?", "cta.browse": "Browse All Compounds →",
      "faq.eyebrow": "Common Questions", "faq.title": "Before you order", "faq.body": "A few things researchers usually ask before their first order.",
      "faq.q1": "How do I get a certificate of analysis?", "faq.a1": "Every batch we carry has a corresponding COA on file. Request the one for your order from the contact link in the footer and we'll send it over.",
      "faq.q2": "How are compounds shipped and stored?", "faq.a2": "Everything ships lyophilized in plain, tracked packaging. Once received, store vials as noted on the product label, and refer to your COA for batch-specific handling notes.",
      "faq.q3": "Who can order from Goldtide Research?", "faq.a3": "Every product on this site is sold for laboratory and in-vitro research use only. Purchasers must be 18 or older and are responsible for lawful, compliant handling in their jurisdiction.",
      "faq.q4": "Can I order a custom stack?", "faq.a4": "Yes — the stacks above are starting points. Add any combination of compounds to your cart and check out as a single order.",
      "footer.tagline": "HPLC-verified research compounds with a batch record behind every vial. Shipped from Canada, for laboratory and in-vitro research use only.",
      "footer.catalog": "Catalog", "footer.shopAll": "Shop All Compounds",
      "footer.info": "Info", "footer.purity": "Purity & Testing", "footer.stacks": "Common Stacks", "footer.supplies": "Injection Supplies", "footer.faq": "FAQ", "footer.about": "About", "footer.guide": "Reference Guide", "footer.library": "Peptide Library", "footer.contact": "Contact",
      "footer.legal": "Legal",
      "footer.legalBody": "All products are sold strictly for laboratory and in-vitro research purposes. Nothing on this site is a drug, supplement, or medical device, and none of these compounds is approved for human or veterinary use. Nothing here is medical advice or an offer of a therapeutic product. Purchasers must be 18 or older and are solely responsible for lawful, compliant handling.",
      "footer.terms": "Terms of Service", "footer.privacy": "Privacy Policy", "footer.shipping": "Shipping & Returns",
      "footer.copyright": "© 2026 Goldtide Research. All rights reserved.", "footer.notHuman": "Not For Human Consumption",
      "footer.badges": "Research Use Only Not For Human Consumption 18+",
      "vial.placeholder": "Vial art shown is a placeholder seal graphic — swap in real product photography whenever it's ready.",
      "checkout.title": "Checkout", "checkout.sub": "Review your order, add your details, and pay by Interac e-Transfer.",
      "checkout.yourOrder": "Your Order", "checkout.contactShipping": "Contact & Shipping",
      "checkout.email": "Email", "checkout.firstName": "First Name", "checkout.lastName": "Last Name",
      "checkout.address": "Address", "checkout.city": "City", "checkout.province": "Province",
      "checkout.postal": "Postal Code", "checkout.phone": "Phone (optional)",
      "checkout.orderSummary": "Order Summary", "checkout.shipping": "Shipping", "checkout.tax": "Tax (13%)", "checkout.total": "Total",
      "checkout.placeOrder": "Place Order — Pay by e-Transfer →",
      "checkout.payNote": "Free shipping on orders over CA$150. Payment is by Interac e-Transfer — after placing your order, you'll get the details to send it.",
      "checkout.sendTransfer": "Send Your e-Transfer", "checkout.sendTo": "Send to", "checkout.amount": "Amount", "checkout.messageNote": "Message / Note",
      "checkout.etNote1": "Include the reference above in the e-Transfer message so we can match it to your order. Autodeposit is enabled, so no security question is needed.",
      "checkout.confirmBtn": "I've Sent My e-Transfer →",
      "checkout.etNote2": "This sends your order details to us by email so we can match your e-Transfer. We'll confirm and ship once it's received.",
      "checkout.footerCopyright": "© 2026 Goldtide Research. Research use only.",
      "success.label": "Order Received", "success.title": "Thank you for your order",
      "success.body": "We've received your order details. Once your Interac e-Transfer arrives, we'll confirm and get it shipped — you'll hear from us by email.",
      "success.orderRef": "Order Reference: ", "success.continueShopping": "Continue Shopping →",
      "guide.subtitle": "The essentials on reading a COA, handling and storing lyophilized compounds, and what each of our nine research categories actually covers.",
      "guide.toc.coa": "Reading a COA", "guide.toc.handling": "Reconstitution &amp; Handling", "guide.toc.appearance": "Appearance &amp; Color",
      "guide.toc.storage": "Storage &amp; Stability", "guide.toc.glossary": "Category Glossary", "guide.toc.stacking": "On Stacking",
      "guide.coa.h2": "Reading a Certificate of Analysis",
      "guide.coa.p1": "A Certificate of Analysis (COA) is the lab report behind a given production batch. It's how a claim like \"≥99% pure\" gets verified rather than just stated. Most COAs you'll come across are built around a handful of core sections:",
      "guide.coa.li1": "<strong>Identity confirmation</strong> — usually mass spectrometry, confirming the molecule's actual mass matches what's expected for that compound. This is what tells you the vial contains the right peptide, not a look-alike or degraded fragment.",
      "guide.coa.li2": "<strong>Purity</strong> — typically from HPLC (high-performance liquid chromatography), which separates a sample into its components and reports the main compound as a percentage of the total peak area. A few smaller peaks alongside the main one are normal; they represent trace synthesis byproducts.",
      "guide.coa.li3": "<strong>Batch or lot number</strong> — ties the report to one specific production run. This is the number to cross-reference against the label on your vial — a COA is only meaningful if it matches the batch you actually received.",
      "guide.coa.li4": "<strong>Testing lab and date</strong> — ideally an independent third-party lab, not an in-house one, since that's what makes the result a check rather than a claim.",
      "guide.coa.li5": "<strong>Endotoxin or heavy-metal screening</strong> — included by some labs, not all. Where present, it's an added layer beyond identity and purity.",
      "guide.coa.p2": "When in doubt about a specific COA, the lot number is the fastest way to confirm you're looking at the right one — it should match your vial exactly, not just the compound name.",
      "guide.handling.h2": "Reconstitution &amp; Handling",
      "guide.handling.p1": "Lyophilized (freeze-dried) peptides ship as a stable powder and need to be brought into solution before use. The mechanics of that process matter more than people expect:",
      "guide.handling.li1": "<strong>Sterile technique throughout.</strong> Wipe the stopper with an alcohol swab before every needle insertion, on both the peptide vial and the diluent vial.",
      "guide.handling.li2": "<strong>Add diluent slowly, down the inside wall of the vial</strong> — not directly onto the powder. A fast stream can shear the peptide structure on contact.",
      "guide.handling.li3": "<strong>Swirl gently to dissolve — don't shake.</strong> Agitation from shaking can denature a peptide's folded structure, the same way whisking egg whites changes their protein structure irreversibly.",
      "guide.handling.li4": "<strong>Let it settle and inspect.</strong> A properly reconstituted solution is typically clear, with no visible particulate. Cloudiness can indicate a problem with that reconstitution.",
      "guide.handling.li5": "<strong>Refrigerate immediately once dissolved.</strong> A reconstituted peptide is far less stable than the lyophilized powder it came from.",
      "guide.handling.p2": "This page covers the general mechanics of reconstitution, not dosing or administration protocols — those are a matter for your own research design.",
      "guide.appearance.h2": "Appearance &amp; Color",
      "guide.appearance.p1": "What a vial looks like — before and after reconstitution — is one of the simplest checks available to you, and worth knowing before you need it.",
      "guide.appearance.li1": "<strong>Lyophilized powder (unreconstituted):</strong> normal appearance is a white or off-white cake or fine powder, sometimes appearing as a thin film pressed against the glass rather than a loose powder — that's a normal effect of the freeze-drying process, not a sign of a problem. Some compounds naturally lyophilize into a more compact pellet than others.",
      "guide.appearance.li2": "<strong>Reconstituted solution:</strong> normal appearance is clear and colorless to very faintly straw-colored, with no visible particles once fully dissolved. Some compounds (certain B-vitamin or NAD-related blends, for instance) can have an inherent pale yellow tint even when correctly mixed — that's a property of the compound itself, not a defect.",
      "guide.appearance.li3": "<strong>Warning signs:</strong> persistent cloudiness or turbidity after swirling, visible flecks or fibers that don't dissolve, an unexpected color shift, or any separation into distinct layers. Any of these can indicate a contamination, degradation, or reconstitution issue.",
      "guide.appearance.p2": "If a vial looks off either before or after reconstitution, don't use it — get in touch with your batch number and we'll sort out a COA check or replacement.",
      "guide.storage.h2": "Storage &amp; Stability",
      "guide.storage.p1": "Peptide stability comes down to three enemies: heat, light, and time in solution.",
      "guide.storage.li1": "<strong>Unopened, lyophilized:</strong> stable at room temperature for the short term, which is what allows standard shipping. For longer-term storage, a fridge (2–8°C) is better, and a freezer (well below 0°C) is best for extended periods.",
      "guide.storage.li2": "<strong>Reconstituted:</strong> keep refrigerated at all times, and use within the window noted for that specific compound — reconstituted peptides generally have a much shorter usable life than the dry powder.",
      "guide.storage.li3": "<strong>Avoid freeze-thaw cycling.</strong> Repeatedly freezing and thawing a reconstituted solution accelerates degradation. If you need multiple sessions from one vial, keep it refrigerated between uses rather than freezing and rethawing.",
      "guide.storage.li4": "<strong>Keep it dark.</strong> UV and even ordinary light exposure can degrade some peptides over time — the amber or foil packaging many vials ship in isn't just branding.",
      "guide.figCaption": "A quick reference for lyophilized peptide storage and stability. Always check the specific notes for your compound.",
      "guide.glossary.h2": "A Glossary of Our Nine Categories",
      "guide.glossary.p1": "Short, plain-language definitions for the research areas you'll see across the catalog.",
      "guide.glossary.weight.desc": "Compounds studied for their role in appetite signaling, glucose regulation, or fat-cell metabolism.",
      "guide.glossary.blends.desc": "Multiple compounds pre-combined into a single vial around a shared research theme, rather than sold individually.",
      "guide.glossary.repair.desc": "Compounds studied in tissue, tendon, and wound-healing research models.",
      "guide.glossary.gh.desc": "Secretagogues — compounds studied for their effect on the body's own growth-hormone release, rather than growth hormone itself.",
      "guide.glossary.cognitive.desc": "Compounds studied for effects on focus, memory, or mood-related pathways in the central nervous system.",
      "guide.glossary.longevity.desc": "Bioregulators and related compounds studied in cellular-aging research, including telomere-related mechanisms.",
      "guide.glossary.hormonal.desc": "Compounds studied in endocrine signaling pathways, including those tied to arousal and reproductive hormone cascades.",
      "guide.glossary.cosmetic.desc": "Compounds studied for effects on skin, hair follicles, and connective tissue.",
      "guide.glossary.supplements.desc": "The solvents, buffers, and cofactor compounds used to reconstitute and support the peptides themselves — not peptides in their own right.",
      "guide.stacking.h2": "How Researchers Talk About \"Stacking\"",
      "guide.stacking.p1": "You'll see the term \"stack\" used for a set of compounds studied together rather than in isolation — usually because their mechanisms are thought to be complementary. A GH secretagogue paired with a metabolic compound is one common example: one pathway and another are being examined together rather than separately.",
      "guide.stacking.p2": "The stacks on our <a href=\"index.html#stacks\" class=\"inline-link\">Common Stacks</a> page reflect that same idea — pairings built around overlapping or adjacent research areas. They're a starting point for structuring a research order, not a recommendation, dose, or protocol. What to combine, and how, is a matter for your own research design and literature review.",
      "guide.legalNote.strong": "In the meantime",
      "guide.legalNote.body": "Every product page and our <a href=\"index.html#purity\" class=\"inline-link\">Purity &amp; Testing</a> section covers the essentials — HPLC verification, COA access, and storage notes for every compound in stock.",
      "simpleFooter.catalog": "Catalog", "simpleFooter.shop": "Shop", "simpleFooter.terms": "Terms", "simpleFooter.privacy": "Privacy", "simpleFooter.shipping": "Shipping", "simpleFooter.contact": "Contact",
      "library.eyebrow": "Compound Reference", "library.title": "The Peptide Library",
      "library.subtitle": "A plain-language reference for every compound in our catalog, organized by research category. This is an identity and background reference, not a dosing or protocol guide — see the <a href=\"guide.html\" class=\"inline-link\">Reference Guide</a> for reconstitution mechanics and storage.",
      "library.legalNote.strong": "A note on scope",
      "library.legalNote.body": "This page is background reference only — what each compound is and the general research area it's studied in. It doesn't cover dosing, administration, or protocols; those are a matter for your own research design and literature review. For reconstitution mechanics, storage, and reading a COA, see the <a href=\"guide.html\" class=\"inline-link\">Reference Guide</a>.",
            "terms.h1": "Terms of Service", "terms.updated": "Last updated: August 2026",
      "terms.intro": "These Terms of Service (\"Terms\") govern access to and purchases from goldtideresearch.ca (\"Goldtide Research,\" \"we,\" \"us\"). By placing an order or browsing this site, you agree to these Terms in full. If you don't agree, please don't use the site.",
      "terms.h2.1": "1. Research Use Only",
      "terms.p.1": "Every compound sold on this site is intended strictly for laboratory, in-vitro, and other non-clinical research use. Nothing here is a drug, dietary supplement, cosmetic, or medical device, and none of these products is approved for human or veterinary use, consumption, or administration. Nothing on this site constitutes medical advice or a therapeutic claim.",
      "terms.h2.2": "2. Eligibility",
      "terms.p.2": "You must be at least 18 years old and legally able to enter a binding contract to order from this site. By placing an order, you confirm that you meet this requirement and that you are purchasing for legitimate research purposes, in compliance with the laws of your jurisdiction.",
      "terms.h2.3": "3. Product Information",
      "terms.p.3": "We make reasonable efforts to keep product descriptions, purity data, and pricing accurate and current. Occasional errors may occur; where they do, we'll correct them and, if an order was affected, contact you before fulfilling it.",
      "terms.h2.4": "4. Orders &amp; Payment",
      "terms.p.4": "Placing an order is an offer to purchase, which we may accept or decline at our discretion — for example if a product is out of stock, if we suspect fraudulent activity, or if we're unable to verify eligibility. Prices are listed in Canadian dollars (CAD) and are subject to change without notice; the price charged is the price shown at checkout.",
      "terms.h2.5": "5. Shipping",
      "terms.p.5": "Shipping timelines, rates, and carrier details are covered in our <a href=\"shipping.html\" class=\"inline-link\">Shipping Policy</a>. Risk of loss passes to you once an order is handed to the carrier; we'll work with you on lost or damaged shipments per that policy.",
      "terms.h2.6": "6. Returns &amp; Refunds",
      "terms.p.6": "Because these are research compounds intended for laboratory handling, we're unable to accept returns once a vial has shipped, except where an item arrives damaged, incorrect, or defective. See our <a href=\"shipping.html\" class=\"inline-link\">Shipping Policy</a> for the process.",
      "terms.h2.7": "7. Prohibited Use",
      "terms.p.7": "You agree not to represent, resell, or repackage any product from this site as intended for human or veterinary consumption, and not to use the site for any unlawful purpose. We reserve the right to refuse service to anyone we reasonably believe is violating these Terms.",
      "terms.h2.8": "8. Limitation of Liability",
      "terms.p.8": "To the fullest extent permitted by law, Goldtide Research is not liable for any indirect, incidental, or consequential damages arising from the purchase, possession, or handling of any product sold on this site. Products are supplied \"as is\" for research purposes, and it is the purchaser's sole responsibility to handle them safely and lawfully.",
      "terms.h2.9": "9. Governing Law",
      "terms.p.9": "These Terms are governed by the laws of Canada and the province in which Goldtide Research operates, without regard to conflict-of-law principles.",
      "terms.h2.10": "10. Changes to These Terms",
      "terms.p.10": "We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.",
      "terms.h2.11": "11. Contact",
      "terms.p.11": "Questions about these Terms can be sent to <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "terms.legalNote.strong": "Research Use Only",
      "terms.legalNote.body": "All products are sold strictly for laboratory and in-vitro research purposes. Purchasers must be 18 or older and are solely responsible for lawful, compliant handling in their jurisdiction.",
            "privacy.h1": "Privacy Policy", "privacy.updated": "Last updated: August 2026",
      "privacy.intro": "This Privacy Policy explains what information Goldtide Research collects, how it's used, and the choices you have. We collect only what's needed to process orders and support customers, and we don't sell personal information.",
      "privacy.h2.1": "1. Information We Collect",
      "privacy.p.1": "When you place an order or contact us, we may collect your name, email address, shipping address, and phone number. Payment is by Interac e-Transfer sent directly through your own bank — we don't collect or store any banking or card information. We also collect basic site-usage data such as pages visited and browser type, to keep the site working properly.",
      "privacy.h2.2": "2. How We Use Information",
      "privacy.li.1": "To process and ship orders, and to send order-related updates (confirmations, tracking, COA requests).",
      "privacy.li.2": "To respond to customer service inquiries.",
      "privacy.li.3": "To maintain batch and compliance records as required for the products we sell.",
      "privacy.li.4": "To improve the site's performance and content.",
      "privacy.h2.3": "3. Cookies &amp; Tracking",
      "privacy.p.3": "This site may use cookies or similar technologies for basic functionality, such as keeping items in your cart between pages. We don't use third-party advertising trackers.",
      "privacy.h2.4": "4. Sharing Information",
      "privacy.p.4": "We share the minimum information necessary with the parties who help us fulfill your order: payment processors, and shipping carriers. We don't sell, rent, or trade your personal information to third parties for marketing purposes.",
      "privacy.h2.5": "5. Data Security",
      "privacy.p.5": "We take reasonable technical and organizational measures to protect the information we hold. No method of transmission or storage is 100% secure, but we work to keep customer data protected at every step we control.",
      "privacy.h2.6": "6. Your Rights",
      "privacy.p.6": "Under Canadian privacy law (PIPEDA), you can request access to, correction of, or deletion of the personal information we hold about you. To make a request, contact us using the details below.",
      "privacy.h2.7": "7. Age Restriction",
      "privacy.p.7": "This site is intended for use by individuals 18 years of age or older. We do not knowingly collect personal information from minors.",
      "privacy.h2.8": "8. Changes to This Policy",
      "privacy.p.8": "We may update this Privacy Policy periodically. The \"last updated\" date at the top of this page reflects the most recent revision.",
      "privacy.h2.9": "9. Contact",
      "privacy.p.9": "For any privacy-related question or request, reach us at <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
            "shipping.h1": "Shipping &amp; Returns", "shipping.updated": "Last updated: August 2026",
      "shipping.h2.processing": "Processing Time",
      "shipping.p.processing": "Orders are processed within 1–2 business days of payment confirmation. You'll receive a tracking number by email as soon as your order ships.",
      "shipping.h2.rates": "Shipping Rates &amp; Delivery",
      "shipping.li.flat": "<strong>Flat rate:</strong> CA$20 on all orders.",
      "shipping.li.free": "<strong>Free shipping</strong> automatically applied on orders over CA$150.",
      "shipping.li.window": "<strong>Delivery window:</strong> typically 7 business days from dispatch, Canada-wide.",
      "shipping.li.pickup": "<strong>Local pickup</strong> is available — select it at checkout for pickup details.",
      "shipping.h2.taxes": "Taxes",
      "shipping.p.taxes": "Applicable sales tax (13%) is added at checkout. No tax is charged on orders paid by cash.",
      "shipping.h2.tracking": "Order Tracking",
      "shipping.p.tracking": "Tracking is provided for every shipment. If your tracking hasn't updated in more than 3 business days, contact us and we'll follow up with the carrier on your behalf.",
      "shipping.h2.lost": "Lost or Damaged Shipments",
      "shipping.p.lost": "If a package is lost in transit or arrives visibly damaged, contact us within 7 days of the expected delivery date with your order number and, if applicable, photos of the damage. We'll arrange a reshipment or refund once the issue is confirmed.",
      "shipping.h2.returns": "Returns &amp; Refunds",
      "shipping.p.returns1": "Because our products are research compounds intended for laboratory handling, we're not able to accept returns once an order has shipped, except in the following cases:",
      "shipping.li.mismatch": "The item received doesn't match what was ordered.",
      "shipping.li.damaged": "The item arrived damaged or defective.",
      "shipping.p.returns2": "In either case, contact us within 7 days of delivery with your order number and a description (and photos, where relevant) of the issue, and we'll arrange a replacement or refund.",
      "shipping.h2.contact": "Contact",
      "shipping.p.contact": "For any shipping or order question, reach us at <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "badge.popular": "Popular", "badge.perVial": "per vial", "badge.add": "Add", "badge.compound": "compound", "badge.compounds": "compounds", "badge.vials": "vials", "badge.addStack": "Add stack", "badge.added": "Added",
    },
    fr: {
      "nav.shop": "Boutique", "nav.catalog": "Catalogue", "nav.stacks": "Combinaisons", "nav.purity": "Pureté", "nav.about": "À propos", "nav.faq": "FAQ", "nav.cart": "Panier",
      "nav.backToShop": "← Retour à la boutique",
      "cart.title": "Votre Panier", "cart.empty": "Votre panier est vide. Parcourez le catalogue pour ajouter des composés.",
      "cart.subtotal": "Sous-total", "cart.checkout": "Continuer vers le paiement →", "cart.preview": "Aperçu du design — connectez votre fournisseur de paiement pour activer cette fonction.",
      "hero.eyebrow": "Précision · Pureté · Performance",
      "hero.title1": "Des composés de qualité recherche,", "hero.title2": "versés avec précision.",
      "hero.body": "Goldtide Research fournit des composés vérifiés par HPLC pour la recherche en laboratoire et in vitro, avec un dossier de lot pour chaque flacon. Expédié depuis le Canada, prix en CAD. Strictement pour usage de recherche — non destiné à la consommation humaine ou vétérinaire.",
      "hero.browseCatalog": "Parcourir le catalogue", "hero.viewCoa": "Voir la bibliothèque de COA",
      "stat.compounds": "Composés en stock", "stat.purity": "Pureté vérifiée par HPLC", "stat.ruo": "Usage de recherche uniquement", "stat.shipped": "Expédié depuis le Canada",
      "catalog.eyebrow": "Le Catalogue", "catalog.title": "40 composés. Neuf catégories. Une seule norme de pureté.",
      "catalog.body": "Chaque composé ci-dessous est testé par HPLC à ≥99 % et expédié lyophilisé pour préserver son efficacité. Usage de recherche uniquement.",
      "popular.eyebrow": "Les Plus Populaires", "popular.title": "Notre top 10",
      "stacks.eyebrow": "Combinaisons Populaires", "stacks.title": "Combinaisons courantes", "stacks.body": "Les composés que nos chercheurs commandent le plus souvent ensemble.",
      "supplies.eyebrow": "Fournitures d'injection", "supplies.title": "Reconstitution et manipulation", "supplies.body": "Stylos, embouts, lingettes et solvants stériles pour manipuler les composés de recherche. Non comptés dans les 40.",
      "guide.eyebrow": "Nouveau en peptides de recherche ?", "guide.title": "Le Guide de Référence Goldtide",
      "guide.body": "Comment lire un COA, les bases de la reconstitution et du stockage, et un glossaire en langage clair de tout ce que nous proposons — gratuit, sur la page.",
      "guide.cta": "Lire le guide →",
      "verify.eyebrow": "Comment nous vérifions", "verify.title": "Chaque flacon répond à un dossier de lot.", "verify.body": "La norme que nous appliquons à chaque composé avant son expédition.",
      "verify.hplc.title": "Vérifié par HPLC", "verify.hplc.body": "Chaque lot est testé selon une norme de chromatographie liquide à haute performance avant d'être répertorié.",
      "verify.third.title": "Testé par un tiers", "verify.third.body": "Une analyse de laboratoire indépendante appuie chaque allégation de pureté que nous publions — rien n'est évalué uniquement en interne.",
      "verify.coa.title": "COA disponible", "verify.coa.body": "Un certificat d'analyse est conservé pour chaque lot et disponible sur demande.",
      "verify.quote": "Goldtide Research a été fondé sur un principe simple : les chercheurs méritent un fournisseur qui considère la pureté comme non négociable, la documentation comme la norme, et chaque flacon comme une promesse tenue — lot après lot.",
      "verify.tagline": "Science · Qualité · Intégrité",
      "cta.title": "Prêt à voir le catalogue complet ?", "cta.browse": "Parcourir tous les composés →",
      "faq.eyebrow": "Questions Fréquentes", "faq.title": "Avant de commander", "faq.body": "Quelques questions que les chercheurs posent habituellement avant leur première commande.",
      "faq.q1": "Comment obtenir un certificat d'analyse ?", "faq.a1": "Chaque lot que nous proposons possède un COA correspondant. Demandez celui de votre commande via le lien de contact dans le pied de page et nous vous l'enverrons.",
      "faq.q2": "Comment les composés sont-ils expédiés et stockés ?", "faq.a2": "Tout est expédié lyophilisé dans un emballage simple et suivi. Une fois reçu, stockez les flacons selon les indications de l'étiquette du produit, et référez-vous à votre COA pour les notes de manipulation spécifiques au lot.",
      "faq.q3": "Qui peut commander chez Goldtide Research ?", "faq.a3": "Chaque produit de ce site est vendu uniquement pour un usage de recherche en laboratoire et in vitro. Les acheteurs doivent avoir 18 ans ou plus et sont responsables d'une manipulation légale et conforme dans leur juridiction.",
      "faq.q4": "Puis-je commander une combinaison personnalisée ?", "faq.a4": "Oui — les combinaisons ci-dessus sont des points de départ. Ajoutez n'importe quelle combinaison de composés à votre panier et validez-la en une seule commande.",
      "footer.tagline": "Composés de recherche vérifiés par HPLC avec un dossier de lot pour chaque flacon. Expédié depuis le Canada, pour usage de recherche en laboratoire et in vitro uniquement.",
      "footer.catalog": "Catalogue", "footer.shopAll": "Voir tous les composés",
      "footer.info": "Info", "footer.purity": "Pureté et tests", "footer.stacks": "Combinaisons courantes", "footer.supplies": "Fournitures d'injection", "footer.faq": "FAQ", "footer.about": "À propos", "footer.guide": "Guide de référence", "footer.library": "Bibliothèque de peptides", "footer.contact": "Contact",
      "footer.legal": "Mentions légales",
      "footer.legalBody": "Tous les produits sont vendus strictement à des fins de recherche en laboratoire et in vitro. Rien sur ce site n'est un médicament, un supplément ou un dispositif médical, et aucun de ces composés n'est approuvé pour un usage humain ou vétérinaire. Rien ici ne constitue un avis médical ou une offre de produit thérapeutique. Les acheteurs doivent avoir 18 ans ou plus et sont seuls responsables d'une manipulation légale et conforme.",
      "footer.terms": "Conditions d'utilisation", "footer.privacy": "Politique de confidentialité", "footer.shipping": "Livraison et retours",
      "footer.copyright": "© 2026 Goldtide Research. Tous droits réservés.", "footer.notHuman": "Non destiné à la consommation humaine",
      "footer.badges": "Usage de recherche uniquement Non destiné à la consommation humaine 18+",
      "vial.placeholder": "L'image du flacon est un graphique de sceau provisoire — remplacez-la par une vraie photo du produit dès qu'elle sera prête.",
      "checkout.title": "Paiement", "checkout.sub": "Vérifiez votre commande, ajoutez vos coordonnées et payez par virement Interac.",
      "checkout.yourOrder": "Votre commande", "checkout.contactShipping": "Contact et livraison",
      "checkout.email": "Courriel", "checkout.firstName": "Prénom", "checkout.lastName": "Nom",
      "checkout.address": "Adresse", "checkout.city": "Ville", "checkout.province": "Province",
      "checkout.postal": "Code postal", "checkout.phone": "Téléphone (facultatif)",
      "checkout.orderSummary": "Résumé de la commande", "checkout.shipping": "Livraison", "checkout.tax": "Taxe (13 %)", "checkout.total": "Total",
      "checkout.placeOrder": "Passer la commande — Payer par virement Interac →",
      "checkout.payNote": "Livraison gratuite pour les commandes de plus de 150 $ CA. Le paiement se fait par virement Interac — après avoir passé votre commande, vous recevrez les détails pour l'envoyer.",
      "checkout.sendTransfer": "Envoyez votre virement Interac", "checkout.sendTo": "Envoyer à", "checkout.amount": "Montant", "checkout.messageNote": "Message / Note",
      "checkout.etNote1": "Indiquez la référence ci-dessus dans le message du virement afin que nous puissions l'associer à votre commande. Le dépôt automatique est activé, aucune question de sécurité n'est donc nécessaire.",
      "checkout.confirmBtn": "J'ai envoyé mon virement Interac →",
      "checkout.etNote2": "Ceci nous envoie les détails de votre commande par courriel afin que nous puissions faire correspondre votre virement. Nous confirmerons et expédierons dès sa réception.",
      "checkout.footerCopyright": "© 2026 Goldtide Research. Usage de recherche uniquement.",
      "success.label": "Commande reçue", "success.title": "Merci pour votre commande",
      "success.body": "Nous avons bien reçu les détails de votre commande. Dès réception de votre virement Interac, nous confirmerons et procéderons à l'expédition — vous recevrez un courriel de notre part.",
      "success.orderRef": "Référence de commande : ", "success.continueShopping": "Continuer mes achats →",
      "guide.subtitle": "L'essentiel sur la lecture d'un COA, la manipulation et le stockage des composés lyophilisés, et ce que couvre réellement chacune de nos neuf catégories de recherche.",
      "guide.toc.coa": "Lire un COA", "guide.toc.handling": "Reconstitution et manipulation", "guide.toc.appearance": "Apparence et couleur",
      "guide.toc.storage": "Stockage et stabilité", "guide.toc.glossary": "Glossaire des catégories", "guide.toc.stacking": "À propos des combinaisons",
      "guide.coa.h2": "Lire un certificat d'analyse",
      "guide.coa.p1": "Un certificat d'analyse (COA) est le rapport de laboratoire derrière un lot de production donné. C'est ce qui permet de vérifier une allégation comme « pureté ≥99 % » plutôt que de simplement l'affirmer. La plupart des COA que vous rencontrerez sont construits autour de quelques sections essentielles :",
      "guide.coa.li1": "<strong>Confirmation d'identité</strong> — généralement par spectrométrie de masse, confirmant que la masse réelle de la molécule correspond à ce qui est attendu pour ce composé. C'est ce qui vous indique que le flacon contient le bon peptide, et non un composé similaire ou un fragment dégradé.",
      "guide.coa.li2": "<strong>Pureté</strong> — généralement obtenue par HPLC (chromatographie liquide à haute performance), qui sépare un échantillon en ses composants et rapporte le composé principal en pourcentage de la surface totale des pics. Quelques pics plus petits à côté du principal sont normaux ; ils représentent des sous-produits de synthèse à l'état de traces.",
      "guide.coa.li3": "<strong>Numéro de lot</strong> — relie le rapport à une production spécifique. C'est le numéro à comparer avec l'étiquette de votre flacon — un COA n'a de sens que s'il correspond au lot que vous avez réellement reçu.",
      "guide.coa.li4": "<strong>Laboratoire d'analyse et date</strong> — idéalement un laboratoire tiers indépendant, et non interne, car c'est ce qui fait du résultat une vérification plutôt qu'une simple allégation.",
      "guide.coa.li5": "<strong>Dépistage des endotoxines ou des métaux lourds</strong> — inclus par certains laboratoires, pas tous. Lorsqu'il est présent, il s'agit d'une couche supplémentaire au-delà de l'identité et de la pureté.",
      "guide.coa.p2": "En cas de doute sur un COA particulier, le numéro de lot est le moyen le plus rapide de confirmer que vous consultez le bon document — il doit correspondre exactement à votre flacon, pas seulement au nom du composé.",
      "guide.handling.h2": "Reconstitution et manipulation",
      "guide.handling.p1": "Les peptides lyophilisés (séchés par congélation) sont expédiés sous forme de poudre stable et doivent être mis en solution avant utilisation. Les aspects techniques de ce processus comptent plus qu'on ne le pense :",
      "guide.handling.li1": "<strong>Technique stérile en tout temps.</strong> Essuyez le bouchon avec une lingette alcoolisée avant chaque insertion d'aiguille, tant sur le flacon de peptide que sur celui de diluant.",
      "guide.handling.li2": "<strong>Ajoutez le diluant lentement, le long de la paroi intérieure du flacon</strong> — pas directement sur la poudre. Un jet rapide peut cisailler la structure du peptide au contact.",
      "guide.handling.li3": "<strong>Faites tourbillonner doucement pour dissoudre — ne secouez pas.</strong> L'agitation par secousse peut dénaturer la structure repliée d'un peptide, tout comme fouetter des blancs d'œufs modifie irréversiblement la structure de leurs protéines.",
      "guide.handling.li4": "<strong>Laissez reposer et inspectez.</strong> Une solution correctement reconstituée est généralement claire, sans particules visibles. Une turbidité peut indiquer un problème de reconstitution.",
      "guide.handling.li5": "<strong>Réfrigérez immédiatement une fois dissous.</strong> Un peptide reconstitué est beaucoup moins stable que la poudre lyophilisée dont il provient.",
      "guide.handling.p2": "Cette page couvre les aspects généraux de la reconstitution, et non les protocoles de dosage ou d'administration — ceux-ci relèvent de votre propre conception de recherche.",
      "guide.appearance.h2": "Apparence et couleur",
      "guide.appearance.p1": "L'aspect d'un flacon — avant et après reconstitution — est l'une des vérifications les plus simples à votre disposition, et il vaut la peine de la connaître avant d'en avoir besoin.",
      "guide.appearance.li1": "<strong>Poudre lyophilisée (non reconstituée) :</strong> l'aspect normal est un gâteau ou une fine poudre blanche à blanchâtre, apparaissant parfois comme un film mince pressé contre le verre plutôt qu'une poudre libre — c'est un effet normal du processus de lyophilisation, non un signe de problème. Certains composés se lyophilisent naturellement en une pastille plus compacte que d'autres.",
      "guide.appearance.li2": "<strong>Solution reconstituée :</strong> l'aspect normal est clair et incolore à très légèrement teinté de paille, sans particules visibles une fois complètement dissous. Certains composés (certains mélanges de vitamines B ou liés au NAD, par exemple) peuvent avoir une teinte jaune pâle inhérente même correctement mélangés — c'est une propriété du composé lui-même, pas un défaut.",
      "guide.appearance.li3": "<strong>Signes d'alerte :</strong> turbidité persistante après agitation, particules ou fibres visibles qui ne se dissolvent pas, changement de couleur inattendu, ou toute séparation en couches distinctes. Tout cela peut indiquer une contamination, une dégradation ou un problème de reconstitution.",
      "guide.appearance.p2": "Si un flacon semble anormal, avant ou après reconstitution, ne l'utilisez pas — contactez-nous avec votre numéro de lot et nous organiserons une vérification de COA ou un remplacement.",
      "guide.storage.h2": "Stockage et stabilité",
      "guide.storage.p1": "La stabilité des peptides dépend de trois ennemis : la chaleur, la lumière et le temps passé en solution.",
      "guide.storage.li1": "<strong>Non ouvert, lyophilisé :</strong> stable à température ambiante à court terme, ce qui permet l'expédition standard. Pour un stockage à plus long terme, un réfrigérateur (2-8°C) est préférable, et un congélateur (bien en dessous de 0°C) est idéal pour des périodes prolongées.",
      "guide.storage.li2": "<strong>Reconstitué :</strong> gardez toujours au réfrigérateur, et utilisez dans le délai indiqué pour ce composé spécifique — les peptides reconstitués ont généralement une durée de vie utile beaucoup plus courte que la poudre sèche.",
      "guide.storage.li3": "<strong>Évitez les cycles de congélation-décongélation.</strong> Congeler et décongeler à répétition une solution reconstituée accélère sa dégradation. Si vous avez besoin de plusieurs séances à partir d'un même flacon, gardez-le réfrigéré entre les utilisations plutôt que de le congeler et décongeler.",
      "guide.storage.li4": "<strong>Gardez-le à l'abri de la lumière.</strong> Les UV et même une exposition ordinaire à la lumière peuvent dégrader certains peptides avec le temps — l'emballage ambré ou en aluminium de nombreux flacons n'est pas qu'une question d'image de marque.",
      "guide.figCaption": "Une référence rapide pour le stockage et la stabilité des peptides lyophilisés. Vérifiez toujours les notes spécifiques à votre composé.",
      "guide.glossary.h2": "Un glossaire de nos neuf catégories",
      "guide.glossary.p1": "Des définitions courtes et en langage clair pour les domaines de recherche que vous verrez dans tout le catalogue.",
      "guide.glossary.weight.desc": "Composés étudiés pour leur rôle dans la signalisation de l'appétit, la régulation de la glycémie ou le métabolisme des cellules adipeuses.",
      "guide.glossary.blends.desc": "Plusieurs composés pré-combinés dans un seul flacon autour d'un thème de recherche commun, plutôt que vendus individuellement.",
      "guide.glossary.repair.desc": "Composés étudiés dans des modèles de recherche sur les tissus, les tendons et la cicatrisation des plaies.",
      "guide.glossary.gh.desc": "Sécrétagogues — composés étudiés pour leur effet sur la propre libération d'hormone de croissance du corps, plutôt que l'hormone de croissance elle-même.",
      "guide.glossary.cognitive.desc": "Composés étudiés pour leurs effets sur la concentration, la mémoire ou les voies liées à l'humeur dans le système nerveux central.",
      "guide.glossary.longevity.desc": "Bio-régulateurs et composés apparentés étudiés dans la recherche sur le vieillissement cellulaire, y compris les mécanismes liés aux télomères.",
      "guide.glossary.hormonal.desc": "Composés étudiés dans les voies de signalisation endocrinienne, y compris celles liées à l'excitation et aux cascades hormonales reproductives.",
      "guide.glossary.cosmetic.desc": "Composés étudiés pour leurs effets sur la peau, les follicules pileux et le tissu conjonctif.",
      "guide.glossary.supplements.desc": "Les solvants, tampons et composés cofacteurs utilisés pour reconstituer et soutenir les peptides eux-mêmes — et non des peptides en soi.",
      "guide.stacking.h2": "Comment les chercheurs parlent des « combinaisons »",
      "guide.stacking.p1": "Vous verrez le terme « combinaison » (stack) utilisé pour un ensemble de composés étudiés ensemble plutôt qu'isolément — généralement parce que leurs mécanismes sont considérés comme complémentaires. Un sécrétagogue de GH associé à un composé métabolique en est un exemple courant : une voie et une autre sont examinées ensemble plutôt que séparément.",
      "guide.stacking.p2": "Les combinaisons sur notre page <a href=\"index.html#stacks\" class=\"inline-link\">Combinaisons courantes</a> reflètent cette même idée — des associations construites autour de domaines de recherche qui se chevauchent ou sont adjacents. Elles constituent un point de départ pour structurer une commande de recherche, et non une recommandation, une dose ou un protocole. Ce qu'il faut combiner, et comment, relève de votre propre conception de recherche et de votre revue de la littérature.",
      "guide.legalNote.strong": "En attendant",
      "guide.legalNote.body": "Chaque page produit et notre section <a href=\"index.html#purity\" class=\"inline-link\">Pureté et tests</a> couvrent l'essentiel — vérification HPLC, accès au COA et notes de stockage pour chaque composé en stock.",
      "simpleFooter.catalog": "Catalogue", "simpleFooter.shop": "Boutique", "simpleFooter.terms": "Conditions", "simpleFooter.privacy": "Confidentialité", "simpleFooter.shipping": "Livraison", "simpleFooter.contact": "Contact",
      "library.eyebrow": "Référence des composés", "library.title": "La Bibliothèque de Peptides",
      "library.subtitle": "Une référence en langage clair pour chaque composé de notre catalogue, organisée par catégorie de recherche. Il s'agit d'une référence d'identité et de contexte, pas d'un guide de dosage ou de protocole — consultez le <a href=\"guide.html\" class=\"inline-link\">Guide de référence</a> pour la mécanique de reconstitution et le stockage.",
      "library.legalNote.strong": "Une remarque sur la portée",
      "library.legalNote.body": "Cette page est une référence de contexte uniquement — ce qu'est chaque composé et le domaine de recherche général dans lequel il est étudié. Elle ne couvre pas le dosage, l'administration ou les protocoles ; ceux-ci relèvent de votre propre conception de recherche et de votre revue de la littérature. Pour la mécanique de reconstitution, le stockage et la lecture d'un COA, consultez le <a href=\"guide.html\" class=\"inline-link\">Guide de référence</a>.",
            "terms.h1": "Conditions d'utilisation", "terms.updated": "Dernière mise à jour : août 2026",
      "terms.intro": "Les présentes conditions d'utilisation (« Conditions ») régissent l'accès et les achats effectués sur goldtideresearch.ca (« Goldtide Research », « nous »). En passant une commande ou en naviguant sur ce site, vous acceptez pleinement ces Conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site.",
      "terms.h2.1": "1. Usage de recherche uniquement",
      "terms.p.1": "Chaque composé vendu sur ce site est destiné strictement à un usage de recherche en laboratoire, in vitro et autre usage non clinique. Rien ici n'est un médicament, un supplément alimentaire, un cosmétique ou un dispositif médical, et aucun de ces produits n'est approuvé pour la consommation, l'administration ou l'usage humain ou vétérinaire. Rien sur ce site ne constitue un avis médical ou une allégation thérapeutique.",
      "terms.h2.2": "2. Admissibilité",
      "terms.p.2": "Vous devez avoir au moins 18 ans et être légalement capable de conclure un contrat contraignant pour commander sur ce site. En passant une commande, vous confirmez remplir cette condition et effectuer votre achat à des fins de recherche légitimes, conformément aux lois de votre juridiction.",
      "terms.h2.3": "3. Informations sur les produits",
      "terms.p.3": "Nous déployons des efforts raisonnables pour maintenir l'exactitude et l'actualité des descriptions de produits, des données de pureté et des prix. Des erreurs occasionnelles peuvent survenir ; le cas échéant, nous les corrigerons et, si une commande a été affectée, nous vous contacterons avant de la traiter.",
      "terms.h2.4": "4. Commandes et paiement",
      "terms.p.4": "Passer une commande constitue une offre d'achat, que nous pouvons accepter ou refuser à notre discrétion — par exemple si un produit est en rupture de stock, si nous soupçonnons une activité frauduleuse, ou si nous ne pouvons pas vérifier votre admissibilité. Les prix sont indiqués en dollars canadiens (CAD) et peuvent être modifiés sans préavis ; le prix facturé est celui affiché lors du paiement.",
      "terms.h2.5": "5. Livraison",
      "terms.p.5": "Les délais de livraison, les tarifs et les détails des transporteurs sont couverts dans notre <a href=\"shipping.html\" class=\"inline-link\">Politique de livraison</a>. Le risque de perte vous est transféré une fois la commande remise au transporteur ; nous collaborerons avec vous concernant les envois perdus ou endommagés conformément à cette politique.",
      "terms.h2.6": "6. Retours et remboursements",
      "terms.p.6": "Étant donné qu'il s'agit de composés de recherche destinés à une manipulation en laboratoire, nous ne pouvons pas accepter de retours une fois qu'un flacon a été expédié, sauf si un article arrive endommagé, incorrect ou défectueux. Consultez notre <a href=\"shipping.html\" class=\"inline-link\">Politique de livraison</a> pour la procédure.",
      "terms.h2.7": "7. Usage interdit",
      "terms.p.7": "Vous acceptez de ne pas représenter, revendre ou reconditionner un produit de ce site comme destiné à la consommation humaine ou vétérinaire, et de ne pas utiliser le site à des fins illégales. Nous nous réservons le droit de refuser service à toute personne dont nous croyons raisonnablement qu'elle enfreint ces Conditions.",
      "terms.h2.8": "8. Limitation de responsabilité",
      "terms.p.8": "Dans toute la mesure permise par la loi, Goldtide Research n'est pas responsable des dommages indirects, accessoires ou consécutifs découlant de l'achat, de la possession ou de la manipulation de tout produit vendu sur ce site. Les produits sont fournis « tels quels » à des fins de recherche, et il incombe uniquement à l'acheteur de les manipuler de manière sûre et légale.",
      "terms.h2.9": "9. Droit applicable",
      "terms.p.9": "Les présentes Conditions sont régies par les lois du Canada et de la province dans laquelle Goldtide Research exerce ses activités, sans égard aux principes de conflit de lois.",
      "terms.h2.10": "10. Modifications des présentes Conditions",
      "terms.p.10": "Nous pouvons mettre à jour ces Conditions de temps à autre. L'utilisation continue du site après la publication des modifications constitue une acceptation des Conditions révisées.",
      "terms.h2.11": "11. Contact",
      "terms.p.11": "Les questions concernant ces Conditions peuvent être envoyées à <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "terms.legalNote.strong": "Usage de recherche uniquement",
      "terms.legalNote.body": "Tous les produits sont vendus strictement à des fins de recherche en laboratoire et in vitro. Les acheteurs doivent avoir 18 ans ou plus et sont seuls responsables d'une manipulation légale et conforme dans leur juridiction.",
            "privacy.h1": "Politique de confidentialité", "privacy.updated": "Dernière mise à jour : août 2026",
      "privacy.intro": "Cette politique de confidentialité explique quelles informations Goldtide Research collecte, comment elles sont utilisées, et les choix qui s'offrent à vous. Nous ne collectons que ce qui est nécessaire pour traiter les commandes et assister les clients, et nous ne vendons pas d'informations personnelles.",
      "privacy.h2.1": "1. Informations que nous collectons",
      "privacy.p.1": "Lorsque vous passez une commande ou nous contactez, nous pouvons collecter votre nom, votre adresse courriel, votre adresse de livraison et votre numéro de téléphone. Le paiement se fait par virement Interac envoyé directement par votre propre banque — nous ne collectons ni ne stockons aucune information bancaire ou de carte. Nous collectons également des données d'utilisation de base du site, telles que les pages visitées et le type de navigateur, pour assurer le bon fonctionnement du site.",
      "privacy.h2.2": "2. Comment nous utilisons les informations",
      "privacy.li.1": "Pour traiter et expédier les commandes, et envoyer des mises à jour liées à la commande (confirmations, suivi, demandes de COA).",
      "privacy.li.2": "Pour répondre aux demandes du service à la clientèle.",
      "privacy.li.3": "Pour tenir des registres de lots et de conformité, comme requis pour les produits que nous vendons.",
      "privacy.li.4": "Pour améliorer la performance et le contenu du site.",
      "privacy.h2.3": "3. Témoins et suivi",
      "privacy.p.3": "Ce site peut utiliser des témoins (cookies) ou des technologies similaires pour des fonctionnalités de base, comme conserver les articles dans votre panier entre les pages. Nous n'utilisons pas de traceurs publicitaires tiers.",
      "privacy.h2.4": "4. Partage des informations",
      "privacy.p.4": "Nous partageons le minimum d'informations nécessaire avec les parties qui nous aident à traiter votre commande : processeurs de paiement et transporteurs. Nous ne vendons, ne louons ni n'échangeons vos informations personnelles à des tiers à des fins de marketing.",
      "privacy.h2.5": "5. Sécurité des données",
      "privacy.p.5": "Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les informations que nous détenons. Aucune méthode de transmission ou de stockage n'est sécurisée à 100 %, mais nous nous efforçons de protéger les données des clients à chaque étape que nous contrôlons.",
      "privacy.h2.6": "6. Vos droits",
      "privacy.p.6": "En vertu de la loi canadienne sur la protection de la vie privée (LPRPDE), vous pouvez demander l'accès, la correction ou la suppression des informations personnelles que nous détenons à votre sujet. Pour faire une demande, contactez-nous en utilisant les coordonnées ci-dessous.",
      "privacy.h2.7": "7. Restriction d'âge",
      "privacy.p.7": "Ce site est destiné à être utilisé par des personnes âgées de 18 ans ou plus. Nous ne collectons pas sciemment d'informations personnelles auprès de mineurs.",
      "privacy.h2.8": "8. Modifications de cette politique",
      "privacy.p.8": "Nous pouvons mettre à jour cette politique de confidentialité périodiquement. La date de « dernière mise à jour » en haut de cette page reflète la révision la plus récente.",
      "privacy.h2.9": "9. Contact",
      "privacy.p.9": "Pour toute question ou demande relative à la confidentialité, contactez-nous à <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
            "shipping.h1": "Livraison et retours", "shipping.updated": "Dernière mise à jour : août 2026",
      "shipping.h2.processing": "Délai de traitement",
      "shipping.p.processing": "Les commandes sont traitées dans un délai de 1 à 2 jours ouvrables après confirmation du paiement. Vous recevrez un numéro de suivi par courriel dès l'expédition de votre commande.",
      "shipping.h2.rates": "Tarifs et délais de livraison",
      "shipping.li.flat": "<strong>Tarif fixe :</strong> 20 $ CA sur toutes les commandes.",
      "shipping.li.free": "<strong>Livraison gratuite</strong> appliquée automatiquement pour les commandes de plus de 150 $ CA.",
      "shipping.li.window": "<strong>Délai de livraison :</strong> généralement 7 jours ouvrables à partir de l'expédition, partout au Canada.",
      "shipping.li.pickup": "<strong>Le ramassage local</strong> est disponible — sélectionnez cette option lors du paiement pour les détails.",
      "shipping.h2.taxes": "Taxes",
      "shipping.p.taxes": "La taxe de vente applicable (13 %) est ajoutée lors du paiement. Aucune taxe n'est facturée pour les commandes payées comptant.",
      "shipping.h2.tracking": "Suivi de commande",
      "shipping.p.tracking": "Un suivi est fourni pour chaque envoi. Si votre suivi n'a pas été mis à jour depuis plus de 3 jours ouvrables, contactez-nous et nous ferons un suivi auprès du transporteur en votre nom.",
      "shipping.h2.lost": "Envois perdus ou endommagés",
      "shipping.p.lost": "Si un colis est perdu en transit ou arrive visiblement endommagé, contactez-nous dans les 7 jours suivant la date de livraison prévue avec votre numéro de commande et, le cas échéant, des photos des dommages. Nous organiserons une réexpédition ou un remboursement une fois le problème confirmé.",
      "shipping.h2.returns": "Retours et remboursements",
      "shipping.p.returns1": "Étant donné que nos produits sont des composés de recherche destinés à une manipulation en laboratoire, nous ne pouvons pas accepter de retours une fois qu'une commande a été expédiée, sauf dans les cas suivants :",
      "shipping.li.mismatch": "L'article reçu ne correspond pas à ce qui a été commandé.",
      "shipping.li.damaged": "L'article est arrivé endommagé ou défectueux.",
      "shipping.p.returns2": "Dans les deux cas, contactez-nous dans les 7 jours suivant la livraison avec votre numéro de commande et une description (et des photos, le cas échéant) du problème, et nous organiserons un remplacement ou un remboursement.",
      "shipping.h2.contact": "Contact",
      "shipping.p.contact": "Pour toute question relative à la livraison ou à une commande, contactez-nous à <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "badge.popular": "Populaire", "badge.perVial": "par flacon", "badge.add": "Ajouter", "badge.compound": "composé", "badge.compounds": "composés", "badge.vials": "flacons", "badge.addStack": "Ajouter le pack", "badge.added": "Ajouté",
    },
    es: {
      "nav.shop": "Tienda", "nav.catalog": "Catálogo", "nav.stacks": "Combinaciones", "nav.purity": "Pureza", "nav.about": "Acerca de", "nav.faq": "Preguntas", "nav.cart": "Carrito",
      "nav.backToShop": "← Volver a la tienda",
      "cart.title": "Tu Carrito", "cart.empty": "Tu carrito está vacío. Explora el catálogo para añadir compuestos.",
      "cart.subtotal": "Subtotal", "cart.checkout": "Continuar al pago →", "cart.preview": "Vista previa de diseño — conecta tu proveedor de pagos para activar esta función.",
      "hero.eyebrow": "Precisión · Pureza · Rendimiento",
      "hero.title1": "Compuestos de grado investigación,", "hero.title2": "vertidos con precisión.",
      "hero.body": "Goldtide Research suministra compuestos verificados por HPLC para investigación de laboratorio e in vitro, con un registro de lote detrás de cada vial. Enviado desde Canadá, precios en CAD. Estrictamente para uso de investigación — no para consumo humano o veterinario.",
      "hero.browseCatalog": "Explorar el catálogo", "hero.viewCoa": "Ver la biblioteca de COA",
      "stat.compounds": "Compuestos en stock", "stat.purity": "Pureza verificada por HPLC", "stat.ruo": "Solo uso de investigación", "stat.shipped": "Enviado desde Canadá",
      "catalog.eyebrow": "El Catálogo", "catalog.title": "40 compuestos. Nueve categorías. Un solo estándar de pureza.",
      "catalog.body": "Cada compuesto a continuación está probado por HPLC a ≥99% y se envía liofilizado para mantener su potencia. Solo uso de investigación.",
      "popular.eyebrow": "Los Más Populares", "popular.title": "Nuestro top 10",
      "stacks.eyebrow": "Combinaciones Populares", "stacks.title": "Combinaciones comunes", "stacks.body": "Los compuestos que nuestros investigadores piden juntos con más frecuencia.",
      "supplies.eyebrow": "Suministros de Inyección", "supplies.title": "Reconstitución y manejo", "supplies.body": "Plumas, puntas, toallitas y disolventes estériles para manejar compuestos de investigación. No incluidos en los 40.",
      "guide.eyebrow": "¿Nuevo en péptidos de investigación?", "guide.title": "La Guía de Referencia Goldtide",
      "guide.body": "Cómo leer un COA, conceptos básicos de reconstitución y almacenamiento, y un glosario en lenguaje sencillo de todo lo que ofrecemos — gratis, en la página.",
      "guide.cta": "Leer la guía →",
      "verify.eyebrow": "Cómo verificamos", "verify.title": "Cada vial responde a un registro de lote.", "verify.body": "El estándar que aplicamos a cada compuesto antes de enviarlo.",
      "verify.hplc.title": "Verificado por HPLC", "verify.hplc.body": "Cada lote se somete a un estándar de cromatografía líquida de alta resolución antes de ser incluido en la lista.",
      "verify.third.title": "Probado por Terceros", "verify.third.body": "Un análisis de laboratorio independiente respalda cada afirmación de pureza que publicamos — nada se evalúa solo internamente.",
      "verify.coa.title": "COA Disponible", "verify.coa.body": "Se conserva un certificado de análisis para cada lote, disponible bajo solicitud.",
      "verify.quote": "Goldtide Research se fundó sobre una premisa simple: los investigadores merecen un proveedor que trate la pureza como innegociable, la documentación como estándar, y cada vial como una promesa cumplida — lote tras lote.",
      "verify.tagline": "Ciencia · Calidad · Integridad",
      "cta.title": "¿Listo para ver el catálogo completo?", "cta.browse": "Explorar todos los compuestos →",
      "faq.eyebrow": "Preguntas Comunes", "faq.title": "Antes de pedir", "faq.body": "Algunas cosas que los investigadores suelen preguntar antes de su primer pedido.",
      "faq.q1": "¿Cómo obtengo un certificado de análisis?", "faq.a1": "Cada lote que manejamos tiene un COA correspondiente registrado. Solicita el de tu pedido desde el enlace de contacto en el pie de página y te lo enviaremos.",
      "faq.q2": "¿Cómo se envían y almacenan los compuestos?", "faq.a2": "Todo se envía liofilizado en un empaque sencillo y rastreado. Una vez recibido, almacena los viales según lo indicado en la etiqueta del producto, y consulta tu COA para notas de manejo específicas del lote.",
      "faq.q3": "¿Quién puede pedir en Goldtide Research?", "faq.a3": "Cada producto en este sitio se vende únicamente para uso de investigación de laboratorio e in vitro. Los compradores deben tener 18 años o más y son responsables de un manejo legal y conforme en su jurisdicción.",
      "faq.q4": "¿Puedo pedir una combinación personalizada?", "faq.a4": "Sí — las combinaciones anteriores son puntos de partida. Añade cualquier combinación de compuestos a tu carrito y págalos como un solo pedido.",
      "footer.tagline": "Compuestos de investigación verificados por HPLC con un registro de lote detrás de cada vial. Enviado desde Canadá, solo para uso de investigación de laboratorio e in vitro.",
      "footer.catalog": "Catálogo", "footer.shopAll": "Ver todos los compuestos",
      "footer.info": "Información", "footer.purity": "Pureza y Pruebas", "footer.stacks": "Combinaciones Comunes", "footer.supplies": "Suministros de Inyección", "footer.faq": "Preguntas", "footer.about": "Acerca de", "footer.guide": "Guía de Referencia", "footer.library": "Biblioteca de Péptidos", "footer.contact": "Contacto",
      "footer.legal": "Legal",
      "footer.legalBody": "Todos los productos se venden estrictamente para fines de investigación de laboratorio e in vitro. Nada en este sitio es un fármaco, suplemento o dispositivo médico, y ninguno de estos compuestos está aprobado para uso humano o veterinario. Nada aquí constituye asesoramiento médico ni una oferta de producto terapéutico. Los compradores deben tener 18 años o más y son los únicos responsables de un manejo legal y conforme.",
      "footer.terms": "Términos de Servicio", "footer.privacy": "Política de Privacidad", "footer.shipping": "Envíos y Devoluciones",
      "footer.copyright": "© 2026 Goldtide Research. Todos los derechos reservados.", "footer.notHuman": "No Apto para Consumo Humano",
      "footer.badges": "Solo Uso de Investigación No Apto para Consumo Humano 18+",
      "vial.placeholder": "El arte del vial mostrado es un gráfico de sello provisional — sustitúyelo por fotografía real del producto cuando esté lista.",
      "checkout.title": "Pago", "checkout.sub": "Revisa tu pedido, añade tus datos y paga por transferencia Interac.",
      "checkout.yourOrder": "Tu Pedido", "checkout.contactShipping": "Contacto y Envío",
      "checkout.email": "Correo electrónico", "checkout.firstName": "Nombre", "checkout.lastName": "Apellido",
      "checkout.address": "Dirección", "checkout.city": "Ciudad", "checkout.province": "Provincia",
      "checkout.postal": "Código postal", "checkout.phone": "Teléfono (opcional)",
      "checkout.orderSummary": "Resumen del Pedido", "checkout.shipping": "Envío", "checkout.tax": "Impuesto (13%)", "checkout.total": "Total",
      "checkout.placeOrder": "Realizar Pedido — Pagar por Transferencia Interac →",
      "checkout.payNote": "Envío gratis en pedidos superiores a CA$150. El pago es por Transferencia Interac — después de realizar tu pedido, recibirás los detalles para enviarla.",
      "checkout.sendTransfer": "Envía tu Transferencia Interac", "checkout.sendTo": "Enviar a", "checkout.amount": "Monto", "checkout.messageNote": "Mensaje / Nota",
      "checkout.etNote1": "Incluye la referencia anterior en el mensaje de la transferencia para que podamos vincularla a tu pedido. El depósito automático está activado, por lo que no se necesita pregunta de seguridad.",
      "checkout.confirmBtn": "Ya Envié Mi Transferencia Interac →",
      "checkout.etNote2": "Esto nos envía los detalles de tu pedido por correo electrónico para que podamos vincular tu transferencia. Confirmaremos y enviaremos una vez recibida.",
      "checkout.footerCopyright": "© 2026 Goldtide Research. Solo uso de investigación.",
      "success.label": "Pedido Recibido", "success.title": "Gracias por tu pedido",
      "success.body": "Hemos recibido los detalles de tu pedido. En cuanto llegue tu Transferencia Interac, confirmaremos y lo enviaremos — recibirás un correo electrónico de nuestra parte.",
      "success.orderRef": "Referencia del pedido: ", "success.continueShopping": "Seguir Comprando →",
      "guide.subtitle": "Lo esencial sobre cómo leer un COA, el manejo y almacenamiento de compuestos liofilizados, y lo que realmente cubre cada una de nuestras nueve categorías de investigación.",
      "guide.toc.coa": "Leer un COA", "guide.toc.handling": "Reconstitución y Manejo", "guide.toc.appearance": "Apariencia y Color",
      "guide.toc.storage": "Almacenamiento y Estabilidad", "guide.toc.glossary": "Glosario de Categorías", "guide.toc.stacking": "Sobre las Combinaciones",
      "guide.coa.h2": "Cómo leer un Certificado de Análisis",
      "guide.coa.p1": "Un Certificado de Análisis (COA) es el informe de laboratorio detrás de un lote de producción determinado. Es lo que permite verificar una afirmación como «pureza ≥99%» en lugar de simplemente declararla. La mayoría de los COA que encontrarás se estructuran en torno a unas pocas secciones básicas:",
      "guide.coa.li1": "<strong>Confirmación de identidad</strong> — generalmente por espectrometría de masas, confirmando que la masa real de la molécula coincide con lo esperado para ese compuesto. Esto es lo que te indica que el vial contiene el péptido correcto, no uno similar o un fragmento degradado.",
      "guide.coa.li2": "<strong>Pureza</strong> — típicamente mediante HPLC (cromatografía líquida de alta resolución), que separa una muestra en sus componentes y reporta el compuesto principal como un porcentaje del área total de picos. Algunos picos más pequeños junto al principal son normales; representan subproductos de síntesis en cantidades traza.",
      "guide.coa.li3": "<strong>Número de lote</strong> — vincula el informe a una producción específica. Este es el número a comparar con la etiqueta de tu vial — un COA solo tiene sentido si coincide con el lote que realmente recibiste.",
      "guide.coa.li4": "<strong>Laboratorio de pruebas y fecha</strong> — idealmente un laboratorio externo independiente, no interno, ya que eso es lo que convierte el resultado en una verificación y no en una simple afirmación.",
      "guide.coa.li5": "<strong>Detección de endotoxinas o metales pesados</strong> — incluida por algunos laboratorios, no todos. Cuando está presente, es una capa adicional más allá de la identidad y la pureza.",
      "guide.coa.p2": "En caso de duda sobre un COA específico, el número de lote es la forma más rápida de confirmar que estás viendo el correcto — debe coincidir exactamente con tu vial, no solo con el nombre del compuesto.",
      "guide.handling.h2": "Reconstitución y Manejo",
      "guide.handling.p1": "Los péptidos liofilizados (secados por congelación) se envían como un polvo estable y deben ponerse en solución antes de usarse. La mecánica de ese proceso importa más de lo que la gente espera:",
      "guide.handling.li1": "<strong>Técnica estéril en todo momento.</strong> Limpia el tapón con una toallita de alcohol antes de cada inserción de aguja, tanto en el vial del péptido como en el del diluyente.",
      "guide.handling.li2": "<strong>Añade el diluyente lentamente, por la pared interior del vial</strong> — no directamente sobre el polvo. Un chorro rápido puede cizallar la estructura del péptido al contacto.",
      "guide.handling.li3": "<strong>Agita suavemente para disolver — no agites con fuerza.</strong> La agitación fuerte puede desnaturalizar la estructura plegada de un péptido, de la misma manera que batir claras de huevo cambia irreversiblemente la estructura de sus proteínas.",
      "guide.handling.li4": "<strong>Deja reposar e inspecciona.</strong> Una solución correctamente reconstituida suele ser clara, sin partículas visibles. La turbidez puede indicar un problema con esa reconstitución.",
      "guide.handling.li5": "<strong>Refrigera inmediatamente una vez disuelto.</strong> Un péptido reconstituido es mucho menos estable que el polvo liofilizado del que proviene.",
      "guide.handling.p2": "Esta página cubre la mecánica general de la reconstitución, no protocolos de dosificación o administración — esos son asunto de tu propio diseño de investigación.",
      "guide.appearance.h2": "Apariencia y Color",
      "guide.appearance.p1": "El aspecto de un vial — antes y después de la reconstitución — es una de las verificaciones más simples a tu disposición, y vale la pena conocerla antes de necesitarla.",
      "guide.appearance.li1": "<strong>Polvo liofilizado (sin reconstituir):</strong> el aspecto normal es una torta o polvo fino blanco o blanquecino, a veces apareciendo como una fina película pegada al vidrio en lugar de un polvo suelto — es un efecto normal del proceso de liofilización, no una señal de problema. Algunos compuestos se liofilizan naturalmente en una pastilla más compacta que otros.",
      "guide.appearance.li2": "<strong>Solución reconstituida:</strong> el aspecto normal es claro e incoloro a muy ligeramente color paja, sin partículas visibles una vez completamente disuelto. Algunos compuestos (ciertas mezclas de vitamina B o relacionadas con NAD, por ejemplo) pueden tener un tinte amarillo pálido inherente incluso mezclados correctamente — es una propiedad del propio compuesto, no un defecto.",
      "guide.appearance.li3": "<strong>Señales de alerta:</strong> turbidez persistente después de agitar, partículas o fibras visibles que no se disuelven, un cambio de color inesperado, o cualquier separación en capas distintas. Cualquiera de estas puede indicar un problema de contaminación, degradación o reconstitución.",
      "guide.appearance.p2": "Si un vial se ve mal, ya sea antes o después de la reconstitución, no lo uses — contáctanos con tu número de lote y resolveremos una verificación de COA o un reemplazo.",
      "guide.storage.h2": "Almacenamiento y Estabilidad",
      "guide.storage.p1": "La estabilidad de los péptidos depende de tres enemigos: calor, luz y tiempo en solución.",
      "guide.storage.li1": "<strong>Sin abrir, liofilizado:</strong> estable a temperatura ambiente a corto plazo, lo que permite el envío estándar. Para almacenamiento a largo plazo, un refrigerador (2-8°C) es mejor, y un congelador (muy por debajo de 0°C) es ideal para períodos prolongados.",
      "guide.storage.li2": "<strong>Reconstituido:</strong> mantén siempre refrigerado, y úsalo dentro del plazo indicado para ese compuesto específico — los péptidos reconstituidos generalmente tienen una vida útil mucho más corta que el polvo seco.",
      "guide.storage.li3": "<strong>Evita los ciclos de congelación-descongelación.</strong> Congelar y descongelar repetidamente una solución reconstituida acelera su degradación. Si necesitas varias sesiones de un mismo vial, mantenlo refrigerado entre usos en lugar de congelarlo y descongelarlo.",
      "guide.storage.li4": "<strong>Mantenlo en la oscuridad.</strong> La luz UV e incluso la exposición a luz ordinaria pueden degradar algunos péptidos con el tiempo — el empaque ámbar o de papel aluminio en el que se envían muchos viales no es solo una cuestión de marca.",
      "guide.figCaption": "Una referencia rápida para el almacenamiento y estabilidad de péptidos liofilizados. Siempre verifica las notas específicas de tu compuesto.",
      "guide.glossary.h2": "Un Glosario de Nuestras Nueve Categorías",
      "guide.glossary.p1": "Definiciones cortas y en lenguaje sencillo para las áreas de investigación que verás en todo el catálogo.",
      "guide.glossary.weight.desc": "Compuestos estudiados por su papel en la señalización del apetito, la regulación de la glucosa o el metabolismo de las células grasas.",
      "guide.glossary.blends.desc": "Múltiples compuestos pre-combinados en un solo vial en torno a un tema de investigación compartido, en lugar de venderse individualmente.",
      "guide.glossary.repair.desc": "Compuestos estudiados en modelos de investigación de tejidos, tendones y cicatrización de heridas.",
      "guide.glossary.gh.desc": "Secretagogos — compuestos estudiados por su efecto en la propia liberación de hormona del crecimiento del cuerpo, en lugar de la hormona del crecimiento en sí.",
      "guide.glossary.cognitive.desc": "Compuestos estudiados por sus efectos en la concentración, la memoria o las vías relacionadas con el estado de ánimo en el sistema nervioso central.",
      "guide.glossary.longevity.desc": "Biorreguladores y compuestos relacionados estudiados en la investigación del envejecimiento celular, incluyendo mecanismos relacionados con los telómeros.",
      "guide.glossary.hormonal.desc": "Compuestos estudiados en vías de señalización endocrina, incluyendo aquellas relacionadas con la excitación y las cascadas hormonales reproductivas.",
      "guide.glossary.cosmetic.desc": "Compuestos estudiados por sus efectos en la piel, los folículos capilares y el tejido conectivo.",
      "guide.glossary.supplements.desc": "Los disolventes, tampones y compuestos cofactores utilizados para reconstituir y apoyar a los propios péptidos — no péptidos en sí mismos.",
      "guide.stacking.h2": "Cómo Hablan los Investigadores sobre las «Combinaciones»",
      "guide.stacking.p1": "Verás el término «combinación» (stack) usado para un conjunto de compuestos estudiados juntos en lugar de aisladamente — generalmente porque se considera que sus mecanismos son complementarios. Un secretagogo de GH combinado con un compuesto metabólico es un ejemplo común: una vía y otra se examinan juntas en lugar de por separado.",
      "guide.stacking.p2": "Las combinaciones en nuestra página de <a href=\"index.html#stacks\" class=\"inline-link\">Combinaciones Comunes</a> reflejan esa misma idea — combinaciones construidas en torno a áreas de investigación superpuestas o adyacentes. Son un punto de partida para estructurar un pedido de investigación, no una recomendación, dosis o protocolo. Qué combinar, y cómo, es asunto de tu propio diseño de investigación y revisión de literatura.",
      "guide.legalNote.strong": "Mientras tanto",
      "guide.legalNote.body": "Cada página de producto y nuestra sección de <a href=\"index.html#purity\" class=\"inline-link\">Pureza y Pruebas</a> cubren lo esencial — verificación por HPLC, acceso al COA y notas de almacenamiento para cada compuesto en stock.",
      "simpleFooter.catalog": "Catálogo", "simpleFooter.shop": "Tienda", "simpleFooter.terms": "Términos", "simpleFooter.privacy": "Privacidad", "simpleFooter.shipping": "Envíos", "simpleFooter.contact": "Contacto",
      "library.eyebrow": "Referencia de Compuestos", "library.title": "La Biblioteca de Péptidos",
      "library.subtitle": "Una referencia en lenguaje sencillo para cada compuesto de nuestro catálogo, organizada por categoría de investigación. Esta es una referencia de identidad y contexto, no una guía de dosificación o protocolo — consulta la <a href=\"guide.html\" class=\"inline-link\">Guía de Referencia</a> para la mecánica de reconstitución y el almacenamiento.",
      "library.legalNote.strong": "Una nota sobre el alcance",
      "library.legalNote.body": "Esta página es solo una referencia de contexto — qué es cada compuesto y el área general de investigación en la que se estudia. No cubre dosificación, administración o protocolos; esos son asunto de tu propio diseño de investigación y revisión de literatura. Para la mecánica de reconstitución, el almacenamiento y cómo leer un COA, consulta la <a href=\"guide.html\" class=\"inline-link\">Guía de Referencia</a>.",
            "terms.h1": "Términos de Servicio", "terms.updated": "Última actualización: agosto de 2026",
      "terms.intro": "Estos Términos de Servicio («Términos») rigen el acceso y las compras en goldtideresearch.ca («Goldtide Research», «nosotros»). Al realizar un pedido o navegar por este sitio, aceptas estos Términos en su totalidad. Si no estás de acuerdo, por favor no uses el sitio.",
      "terms.h2.1": "1. Solo Uso de Investigación",
      "terms.p.1": "Cada compuesto vendido en este sitio está destinado estrictamente a uso de investigación de laboratorio, in vitro y otro uso no clínico. Nada aquí es un fármaco, suplemento dietético, cosmético o dispositivo médico, y ninguno de estos productos está aprobado para consumo, administración o uso humano o veterinario. Nada en este sitio constituye asesoramiento médico o una afirmación terapéutica.",
      "terms.h2.2": "2. Elegibilidad",
      "terms.p.2": "Debes tener al menos 18 años y ser legalmente capaz de celebrar un contrato vinculante para pedir en este sitio. Al realizar un pedido, confirmas que cumples con este requisito y que estás comprando con fines de investigación legítimos, en cumplimiento con las leyes de tu jurisdicción.",
      "terms.h2.3": "3. Información del Producto",
      "terms.p.3": "Hacemos esfuerzos razonables para mantener las descripciones de productos, los datos de pureza y los precios exactos y actualizados. Pueden ocurrir errores ocasionales; cuando esto sucede, los corregiremos y, si un pedido se vio afectado, te contactaremos antes de procesarlo.",
      "terms.h2.4": "4. Pedidos y Pago",
      "terms.p.4": "Realizar un pedido constituye una oferta de compra, que podemos aceptar o rechazar a nuestra discreción — por ejemplo, si un producto está agotado, si sospechamos actividad fraudulenta, o si no podemos verificar tu elegibilidad. Los precios se indican en dólares canadienses (CAD) y están sujetos a cambios sin previo aviso; el precio cobrado es el que se muestra al finalizar la compra.",
      "terms.h2.5": "5. Envío",
      "terms.p.5": "Los plazos de envío, las tarifas y los detalles del transportista se cubren en nuestra <a href=\"shipping.html\" class=\"inline-link\">Política de Envío</a>. El riesgo de pérdida pasa a ti una vez que el pedido se entrega al transportista; trabajaremos contigo en envíos perdidos o dañados según esa política.",
      "terms.h2.6": "6. Devoluciones y Reembolsos",
      "terms.p.6": "Debido a que estos son compuestos de investigación destinados al manejo en laboratorio, no podemos aceptar devoluciones una vez que un vial ha sido enviado, excepto cuando un artículo llegue dañado, incorrecto o defectuoso. Consulta nuestra <a href=\"shipping.html\" class=\"inline-link\">Política de Envío</a> para el proceso.",
      "terms.h2.7": "7. Uso Prohibido",
      "terms.p.7": "Aceptas no representar, revender ni reempaquetar ningún producto de este sitio como destinado al consumo humano o veterinario, y no usar el sitio para ningún propósito ilegal. Nos reservamos el derecho de rechazar el servicio a cualquier persona que razonablemente creamos que está violando estos Términos.",
      "terms.h2.8": "8. Limitación de Responsabilidad",
      "terms.p.8": "En la máxima medida permitida por la ley, Goldtide Research no es responsable de ningún daño indirecto, incidental o consecuente que surja de la compra, posesión o manejo de cualquier producto vendido en este sitio. Los productos se suministran «tal cual» con fines de investigación, y es responsabilidad exclusiva del comprador manejarlos de forma segura y legal.",
      "terms.h2.9": "9. Ley Aplicable",
      "terms.p.9": "Estos Términos se rigen por las leyes de Canadá y la provincia en la que opera Goldtide Research, sin considerar los principios de conflicto de leyes.",
      "terms.h2.10": "10. Cambios a Estos Términos",
      "terms.p.10": "Podemos actualizar estos Términos de vez en cuando. El uso continuado del sitio después de que se publiquen los cambios constituye la aceptación de los Términos revisados.",
      "terms.h2.11": "11. Contacto",
      "terms.p.11": "Las preguntas sobre estos Términos pueden enviarse a <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "terms.legalNote.strong": "Solo Uso de Investigación",
      "terms.legalNote.body": "Todos los productos se venden estrictamente para fines de investigación de laboratorio e in vitro. Los compradores deben tener 18 años o más y son los únicos responsables de un manejo legal y conforme en su jurisdicción.",
            "privacy.h1": "Política de Privacidad", "privacy.updated": "Última actualización: agosto de 2026",
      "privacy.intro": "Esta Política de Privacidad explica qué información recopila Goldtide Research, cómo se utiliza, y las opciones que tienes. Solo recopilamos lo necesario para procesar pedidos y ayudar a los clientes, y no vendemos información personal.",
      "privacy.h2.1": "1. Información que Recopilamos",
      "privacy.p.1": "Cuando realizas un pedido o nos contactas, podemos recopilar tu nombre, dirección de correo electrónico, dirección de envío y número de teléfono. El pago se realiza mediante Transferencia Interac enviada directamente a través de tu propio banco — no recopilamos ni almacenamos ninguna información bancaria o de tarjeta. También recopilamos datos básicos de uso del sitio, como páginas visitadas y tipo de navegador, para mantener el sitio funcionando correctamente.",
      "privacy.h2.2": "2. Cómo Usamos la Información",
      "privacy.li.1": "Para procesar y enviar pedidos, y enviar actualizaciones relacionadas con el pedido (confirmaciones, seguimiento, solicitudes de COA).",
      "privacy.li.2": "Para responder a consultas de servicio al cliente.",
      "privacy.li.3": "Para mantener registros de lotes y cumplimiento según lo requerido para los productos que vendemos.",
      "privacy.li.4": "Para mejorar el rendimiento y el contenido del sitio.",
      "privacy.h2.3": "3. Cookies y Seguimiento",
      "privacy.p.3": "Este sitio puede usar cookies o tecnologías similares para funcionalidades básicas, como mantener los artículos en tu carrito entre páginas. No usamos rastreadores publicitarios de terceros.",
      "privacy.h2.4": "4. Compartir Información",
      "privacy.p.4": "Compartimos la información mínima necesaria con las partes que nos ayudan a completar tu pedido: procesadores de pago y transportistas. No vendemos, alquilamos ni intercambiamos tu información personal a terceros con fines de marketing.",
      "privacy.h2.5": "5. Seguridad de Datos",
      "privacy.p.5": "Tomamos medidas técnicas y organizativas razonables para proteger la información que tenemos. Ningún método de transmisión o almacenamiento es 100% seguro, pero trabajamos para mantener los datos de los clientes protegidos en cada paso que controlamos.",
      "privacy.h2.6": "6. Tus Derechos",
      "privacy.p.6": "Según la ley canadiense de privacidad (PIPEDA), puedes solicitar acceso, corrección o eliminación de la información personal que tenemos sobre ti. Para hacer una solicitud, contáctanos usando los datos a continuación.",
      "privacy.h2.7": "7. Restricción de Edad",
      "privacy.p.7": "Este sitio está destinado a personas de 18 años de edad o más. No recopilamos conscientemente información personal de menores.",
      "privacy.h2.8": "8. Cambios a Esta Política",
      "privacy.p.8": "Podemos actualizar esta Política de Privacidad periódicamente. La fecha de «última actualización» en la parte superior de esta página refleja la revisión más reciente.",
      "privacy.h2.9": "9. Contacto",
      "privacy.p.9": "Para cualquier pregunta o solicitud relacionada con la privacidad, contáctanos en <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
            "shipping.h1": "Envíos y Devoluciones", "shipping.updated": "Última actualización: agosto de 2026",
      "shipping.h2.processing": "Tiempo de Procesamiento",
      "shipping.p.processing": "Los pedidos se procesan dentro de 1-2 días hábiles después de la confirmación del pago. Recibirás un número de seguimiento por correo electrónico tan pronto como se envíe tu pedido.",
      "shipping.h2.rates": "Tarifas de Envío y Entrega",
      "shipping.li.flat": "<strong>Tarifa fija:</strong> CA$20 en todos los pedidos.",
      "shipping.li.free": "<strong>Envío gratis</strong> aplicado automáticamente en pedidos superiores a CA$150.",
      "shipping.li.window": "<strong>Ventana de entrega:</strong> típicamente 7 días hábiles desde el despacho, en todo Canadá.",
      "shipping.li.pickup": "<strong>Recogida local</strong> disponible — selecciónala al finalizar la compra para conocer los detalles.",
      "shipping.h2.taxes": "Impuestos",
      "shipping.p.taxes": "El impuesto sobre las ventas aplicable (13%) se añade al finalizar la compra. No se cobra impuesto en pedidos pagados en efectivo.",
      "shipping.h2.tracking": "Seguimiento del Pedido",
      "shipping.p.tracking": "Se proporciona seguimiento para cada envío. Si tu seguimiento no se ha actualizado en más de 3 días hábiles, contáctanos y haremos seguimiento con el transportista en tu nombre.",
      "shipping.h2.lost": "Envíos Perdidos o Dañados",
      "shipping.p.lost": "Si un paquete se pierde en tránsito o llega visiblemente dañado, contáctanos dentro de los 7 días posteriores a la fecha de entrega esperada con tu número de pedido y, si corresponde, fotos del daño. Organizaremos un reenvío o reembolso una vez confirmado el problema.",
      "shipping.h2.returns": "Devoluciones y Reembolsos",
      "shipping.p.returns1": "Debido a que nuestros productos son compuestos de investigación destinados al manejo en laboratorio, no podemos aceptar devoluciones una vez que un pedido ha sido enviado, excepto en los siguientes casos:",
      "shipping.li.mismatch": "El artículo recibido no coincide con lo que se pidió.",
      "shipping.li.damaged": "El artículo llegó dañado o defectuoso.",
      "shipping.p.returns2": "En cualquier caso, contáctanos dentro de los 7 días posteriores a la entrega con tu número de pedido y una descripción (y fotos, si corresponde) del problema, y organizaremos un reemplazo o reembolso.",
      "shipping.h2.contact": "Contacto",
      "shipping.p.contact": "Para cualquier pregunta sobre envíos o pedidos, contáctanos en <a href=\"mailto:goldtidesresearch@gmail.com\" class=\"inline-link\">goldtidesresearch@gmail.com</a>.",
      "badge.popular": "Popular", "badge.perVial": "por vial", "badge.add": "Añadir", "badge.compound": "compuesto", "badge.compounds": "compuestos", "badge.vials": "viales", "badge.addStack": "Añadir el pack", "badge.added": "Añadido",
    },
  };

  // ---------- Stack translations, keyed by stack name ----------
  window.STACK_I18N = {
    "Metabolic Stack": {
      fr: { eyebrow: "Perte de poids", name: "Pack Métabolique", b: "Trois mécanismes métaboliques étudiés ensemble pour la recherche sur les voies du poids." },
      es: { eyebrow: "Pérdida de peso", name: "Pack Metabólico", b: "Tres mecanismos metabólicos estudiados juntos para la investigación de vías de peso." },
    },
    "Mitochondrial Energy": {
      fr: { eyebrow: "Plus d'énergie", name: "Énergie Mitochondriale", b: "Production, protection et méthylation — quatre composés étudiés ensemble pour la recherche sur l'énergie cellulaire." },
      es: { eyebrow: "Más energía", name: "Energía Mitocondrial", b: "Producción, protección y metilación — cuatro compuestos estudiados juntos para la investigación de energía celular." },
    },
    "GH Stack": {
      fr: { eyebrow: "Prise de muscle", name: "Pack HC", b: "Un protocole d'impulsion HC plus fort et additif pour la recherche sur l'hormone de croissance." },
      es: { eyebrow: "Desarrollo muscular", name: "Pack HC", b: "Un protocolo de pulso de HC más fuerte y aditivo para la investigación de la hormona del crecimiento." },
    },
    "Repair Stack": {
      fr: { eyebrow: "Réparation tissulaire", name: "Pack Réparation", b: "Les deux peptides de réparation les plus étudiés, associés pour la recherche sur la récupération tissulaire." },
      es: { eyebrow: "Reparación de tejidos", name: "Pack de Reparación", b: "Los dos péptidos de reparación más estudiados, combinados para la investigación de recuperación de tejidos." },
    },
    "Skin & Hair": {
      fr: { eyebrow: "Meilleure peau", name: "Peau et Cheveux", b: "Un mélange régénérant associé à un octapeptide topique, étudiés ensemble pour la recherche sur la peau et les rides d'expression." },
      es: { eyebrow: "Mejor piel", name: "Piel y Cabello", b: "Una mezcla regenerativa combinada con un octapéptido tópico, estudiadas juntas para la investigación de la piel y las líneas de expresión." },
    },
    "Sleep & Calm": {
      fr: { eyebrow: "Meilleur sommeil", name: "Sommeil et Calme", b: "Un peptide de l'architecture du sommeil avec le propre signal circadien du corps et un anxiolytique calmant, étudiés pour les protocoles de recherche nocturnes." },
      es: { eyebrow: "Mejor sueño", name: "Sueño y Calma", b: "Un péptido de la arquitectura del sueño con la propia señal circadiana del cuerpo y un ansiolítico calmante, estudiados para protocolos de investigación nocturnos." },
    },
    "Focus & Clarity": {
      fr: { eyebrow: "Concentration accrue", name: "Concentration et Clarté", b: "Un mélange cognitif nasal associé à une coenzyme d'énergie cellulaire, étudiés ensemble pour la recherche sur la concentration et la clarté mentale." },
      es: { eyebrow: "Enfoque más agudo", name: "Enfoque y Claridad", b: "Una mezcla cognitiva nasal combinada con una coenzima de energía celular, estudiadas juntas para la investigación de enfoque y claridad mental." },
    },
    "Longevity Stack": {
      fr: { eyebrow: "Longévité", name: "Pack Longévité", b: "Trois bio-régulateurs de la lignée Khavinson pour la recherche sur les voies du vieillissement." },
      es: { eyebrow: "Longevidad", name: "Pack de Longevidad", b: "Tres biorreguladores de la línea Khavinson para la investigación de vías del envejecimiento." },
    },
    "Libido & Hormonal": {
      fr: { eyebrow: "Sexe et libido", name: "Libido et Hormonal", b: "Un composé de la voie d'excitation centrale associé à deux moteurs en amont de la propre cascade de testostérone du corps." },
      es: { eyebrow: "Sexo y libido", name: "Libido y Hormonal", b: "Un compuesto de la vía de excitación central combinado con dos impulsores previos de la propia cascada de testosterona del cuerpo." },
    },
  };

  // ---------- Supply item translations, keyed by supply name ----------
  window.SUPPLY_I18N = {
    "Reconstitution Kit": {
      fr: { n: "Kit de reconstitution", d: "stylo + cartouches + embouts + lingettes + eau BAC" },
      es: { n: "Kit de reconstitución", d: "pluma + cartuchos + puntas + toallitas + agua BAC" },
    },
    "Injection Pen": {
      fr: { n: "Stylo injecteur", d: "réutilisable, cadran 60 unités" },
      es: { n: "Pluma de inyección", d: "reutilizable, dial de 60 unidades" },
    },
    "Pen Needles / Syringes": {
      fr: { n: "Aiguilles / Seringues", d: "31g, paquet de 30" },
      es: { n: "Agujas / Jeringas", d: "31g, paquete de 30" },
    },
    "Pen Cartridges": {
      fr: { n: "Cartouches pour stylo", d: "3 ml, paquet de 10" },
      es: { n: "Cartuchos para pluma", d: "3 ml, paquete de 10" },
    },
    "Alcohol Wipes": {
      fr: { n: "Lingettes alcoolisées", d: "IPA 70 %, paquet de 30" },
      es: { n: "Toallitas de alcohol", d: "IPA 70%, paquete de 30" },
    },
  };

  function getStackText(name, field, englishFallback) {
    const lang = getLang();
    if (lang === 'en') return englishFallback;
    const entry = window.STACK_I18N[name];
    return (entry && entry[lang] && entry[lang][field]) || englishFallback;
  }
  window.getStackText = getStackText;

  function getSupplyText(name, field, englishFallback) {
    const lang = getLang();
    if (lang === 'en') return englishFallback;
    const entry = window.SUPPLY_I18N[name];
    return (entry && entry[lang] && entry[lang][field]) || englishFallback;
  }
  window.getSupplyText = getSupplyText;

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function t(key) {
    const lang = getLang();
    return (window.UI_I18N[lang] && window.UI_I18N[lang][key]) || window.UI_I18N.en[key] || '';
  }
  window.t = t;

  function getProductBlurb(name, englishFallback) {
    const lang = getLang();
    if (lang === 'en') return englishFallback;
    const entry = window.PRODUCT_I18N[name];
    return (entry && entry[lang]) || englishFallback;
  }
  window.getProductBlurb = getProductBlurb;

  function getCategoryText(catId, field, englishFallback) {
    const lang = getLang();
    if (lang === 'en') return englishFallback;
    const entry = window.CATEGORY_I18N[catId];
    return (entry && entry[lang] && entry[lang][field]) || englishFallback;
  }
  window.getCategoryText = getCategoryText;

  function applyI18n() {
    const lang = getLang();
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-cat]').forEach(el => {
      const catId = el.getAttribute('data-i18n-cat');
      if (!el.dataset.i18nOriginal) el.dataset.i18nOriginal = el.textContent;
      el.textContent = getCategoryText(catId, 'name', el.dataset.i18nOriginal);
    });

    document.querySelectorAll('[data-i18n-lib]').forEach(el => {
      const name = el.getAttribute('data-i18n-lib');
      if (!el.dataset.i18nOriginal) el.dataset.i18nOriginal = el.textContent;
      el.textContent = getLibraryText(name, el.dataset.i18nOriginal);
    });

    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (typeof window.onLangChange === 'function') {
      window.onLangChange(lang);
    }
  }
  window.applyI18n = applyI18n;

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18n();
  }
  window.setLang = setLang;

  function init() {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });
    applyI18n();
  }
  // This script is loaded at the end of <body>, so the DOM is already parsed
  // by the time it runs — DOMContentLoaded would have already fired. Run directly.
  init();
})();
