// Accepted papers for HARVEST-Vision 2027 (WACV 2027 workshop), in the order
// supplied by the WACV workshop proceedings sheet. Each author's affiliation
// may hold several institutions separated by "; ".

const UCD = 'University of California, Davis';
const UFG = 'Universidade Federal de Goiás';
const UNICAMP = 'Universidade Estadual de Campinas';
const CORNELL = 'Cornell University';
const PWR = 'Wrocław University of Science and Technology';
const UWYO = 'University of Wyoming';
const TUE = 'Eindhoven University of Technology';
const BCU = 'Birmingham City University';
const SUT = 'Silesian University of Technology, Poland';
const CSU = 'Central State University';

export const acceptedPapers = [
  {
    title:
      'AutoAgriCV: Multi-Agent LLM Framework for Iterative Computer Vision Solution Development in Precision Agriculture',
    contactAuthor: 'Paweł Majewski',
    contactEmail: 'pawel.majewski@pwr.edu.pl',
    authors: [
      { name: 'Paweł Majewski', affiliation: PWR },
      { name: 'Michał Woźniak', affiliation: PWR },
    ],
    abstract:
      'Traditional development of machine learning–based computer vision solutions requires large amounts of labeled data, domain expertise, and substantial engineering effort. This challenge is particularly evident in Precision Agriculture, where high data variability makes rapid prototyping especially valuable. To address this issue, this work proposes a multi-agent LLM framework to develop, refine, and validate computer vision solutions in zero-shot and few-shot settings. The framework comprises nine deterministic, LLM-based, and hybrid agents. Its key innovations include iterative solution improvement through error-driven feedback, validation metric estimation using an LLM-as-a-Judge approach, and dataset enrichment with the foundation model SAM. The framework was evaluated on three agricultural tasks: crop detection, crop counting (midpoint detection), and crop row detection. Results demonstrate the potential of multi-agent LLM systems to accelerate the development of computer vision methods while reducing annotation effort and engineering requirements.',
  },
  {
    title: "So what's your data about? Private and FAIR Multimodal Metadata Extraction",
    contactAuthor: 'Yuan Garcia',
    contactEmail: 'ygarcia@g.hmc.edu',
    authors: [
      { name: 'Yuan Garcia', affiliation: 'Harvey Mudd College' },
      { name: 'Rob Kooper', affiliation: 'University of Illinois Urbana-Champaign' },
      { name: 'Ana Lucic', affiliation: 'University of Illinois Urbana-Champaign' },
    ],
    abstract:
      "Agricultural datasets combine satellite imagery, photographs, video, and tabular records, but are rarely documented well enough to be found or reused. Producing machine-readable metadata is labor-intensive, and institutional data-use agreements often prohibit sending the data to hosted models. We present a pipeline that generates MLCommons Croissant description and keywords fields for heterogeneous multimodal datasets using vision-language models served entirely on local infrastructure. Its central mechanism is hint chaining: modalities are processed in order of interpretive difficulty, and each stage's summary conditions the next, so that cheaply extracted textual and tabular context anchors the reading of imagery and video. A perceptual-hash and embedding cascade reduces image and video collections to a fixed token budget, keeping dataset-level summarization tractable on local hardware; every non-generated field is harvested deterministically and injected after generation. In a four-condition ablation over 12 disjoint blocks per dataset, the extracted chain recovers significantly more expert-datasheet claims than ungrounded generation on every arm, reaching up to 3.4x the no-context baseline when seeded with the uploader's description, while contradictions remain below 0.5% of verdicts. Domain experts judged the generated fields accurate and completed a review in a median of six minutes.",
  },
  {
    title:
      'CottonBoll-UAV: Dense Small-Object Detection in UAV Imagery for Automated Cotton Yield Estimation',
    contactAuthor: 'Prabha Sundaravadivel',
    contactEmail: 'psundaravadivel@uttyler.edu',
    authors: [
      { name: 'Prajwal Mahesha Sethurani', affiliation: 'The University of Texas at Dallas, USA' },
      { name: 'Prabha Sundaravadivel', affiliation: 'The University of Texas at Tyler, USA' },
      { name: 'Varun Valluvan', affiliation: 'The University of Texas at Tyler, USA' },
      { name: 'Lakshman Tamil', affiliation: 'The University of Texas at Dallas, USA' },
      { name: 'H. Allen Torbert', affiliation: 'USDA-ARS, USA' },
    ],
    abstract:
      'Cotton yield estimation is an important component of precision agriculture, supporting harvest planning, resource allocation, and crop management decisions. Manual boll counting is labor-intensive and difficult to scale to commercial production. Although UAV imagery combined with deep learning provides a promising alternative, comparison among existing methods remains challenging because most approaches are evaluated using private datasets and inconsistent experimental protocols. This paper presents CottonBoll-UAV, a UAV-based benchmark for dense cotton boll detection. The benchmark consists of 1,857 mapping-mission images collected at an altitude of 12 m above ground level, corresponding to a ground sampling distance of approximately 3.2 mm/pixel. Images were acquired from two geographically separate cotton fields, one before defoliation and one after defoliation, and were divided into 148,560 image tiles of 640 × 640 pixels. Post-defoliation tiles contain a median of 265 bolls and as many as 1,177 bolls per tile, representing an object density substantially higher than that found in general-purpose object detection datasets. Because UAV mapping missions use substantial image overlap, individual plants may appear in approximately 40 frames, creating a potential risk of spatial leakage when datasets are partitioned by image rather than geographic location. To address this issue, training and testing regions were separated using 13 m exclusion buffers, exceeding the footprint of a full UAV image and ensuring that plants observed in training images do not appear in the test set. A controlled comparison with a random tile-level partition showed negligible performance inflation on this dataset, with F1-score differences below 0.005 at matched detection thresholds. A manually verified evaluation set containing 1,215 tiles and 217,021 bounding boxes was constructed from model-assisted pre-annotations. The 96,080 training tiles were labeled using an annotation model and filtered through cross-tile agreement. Evaluation of three object detectors revealed an important limitation of model-assisted annotation. Because candidate detections were initially filtered using a confidence threshold of 0.30, smaller objects were disproportionately omitted from the preliminary annotations. During manual verification, the newly added bounding boxes had a median size of 12 pixels compared with 18 pixels for retained annotations. These smaller objects were also consistently assigned lower confidence by models trained on the resulting dataset. Consequently, average precision reached 0.975 for retained annotations but only 0.078 for subsequently added annotations using the same model, despite recall exceeding 0.96 for both groups at low confidence thresholds. To provide a more representative assessment, threshold-based detection metrics are reported as the primary evaluation criteria. The evaluated models achieve F1-scores between 0.920 and 0.929 and estimate boll counts within 8.3%–9.4% of the manually verified totals, with all models exhibiting systematic under-counting. Increasing model capacity by 3.8× improves F1-score by only 0.009, suggesting that annotation coverage, rather than model size, is the primary performance limitation in this dense detection setting. Finally, we present a preliminary edge deployment study using the AMD Kria KV260 FPGA platform and discuss current limitations associated with on-device post-processing.',
  },
  {
    title:
      'What Chamfer Distance Misses: Coverage and Point Distribution in Masked Reconstruction of Plant Point Clouds',
    contactAuthor: 'Yaqoob Majeed',
    contactEmail: 'ymajeed@uwyo.edu',
    authors: [
      { name: 'Sanjog Gaihre', affiliation: UWYO },
      { name: 'Ali Torabi', affiliation: UWYO },
      { name: 'Md Mahbubur Rahman', affiliation: UWYO },
      { name: 'Md Faruk', affiliation: UWYO },
      { name: 'Yaqoob Majeed', affiliation: UWYO },
    ],
    abstract:
      "Chamfer distance (CD) is a widely used loss and metric for point-cloud reconstruction, but a low CD can hide clustered predictions and uncovered surface, two problems that matter for plant phenotyping. We study these problems with Point-MAE on the Pepper-4D dataset and add two terms to CD computed on the assembled output cloud. One penalises deviations from the ground truth's local point spacing, and the other targets the 10% of ground-truth points that are worst covered. Standard Point-MAE matches the reference mean spacing to within 3%, but the variation in its spacing is about twice the reference value. Its decoder-generated points reach only 9.5% of the ground-truth points within one mean spacing, and our terms raise this to 20.3%, almost entirely through the spacing term. Stem/leaf segmentation by a frozen segmenter also improves. Gated mean IoU, which counts uncovered ground-truth points as errors, rises by 0.079 over standard Point-MAE (95% confidence interval 0.066-0.091). This score is the highest of six objectives, though only 0.006 above density-aware CD. Across these objectives, a lower CD-L1 goes with worse segmentation of the generated points, apart from a tie at the top. The extra terms raise training cost but leave inference unchanged. On two H100 GPUs, distributed data parallelism trains 1.62x faster than one GPU, while single-process data parallelism is slower. These results support checking coverage, point distribution and downstream performance alongside CD. Code will be released on GitHub upon acceptance.",
  },
  {
    title:
      'Euca3D: A Real-World Benchmark for Point Cloud Completion in Eucalyptus Plantations',
    contactAuthor: 'Fabrizzio Soares',
    contactEmail: 'fabrizzio@ufg.br',
    authors: [
      { name: 'Welington Galvão Rodrigues', affiliation: UFG },
      { name: 'Gabriel da Silva Vieira', affiliation: UFG },
      { name: 'Helio Pedrini', affiliation: UNICAMP },
      { name: 'Juliana Felix', affiliation: UFG },
      { name: 'Fabrizzio Soares', affiliation: UFG },
    ],
    abstract:
      'Deep point cloud completion has advanced on synthetic CAD benchmarks, but its behavior on field-acquired vegetation remains poorly understood. This paper introduces Euca3D, a benchmark of paired partial and circumferential reference point clouds derived from terrestrial LiDAR scans of 55 clonal eucalyptus trees in a commercial plantation, and evaluates seven completion architectures: FoldingNet, PCN, GRNet, SnowflakeNet, PoinTr, PointAttN, and ODGNet. All models are fine-tuned from ShapeNet-pretrained weights using identical preprocessing, hyperparameters, and 5-fold cross-validation. SnowflakeNet achieves the lowest Chamfer Distance under both variants (0.0431 m CD-L1 and 0.0085 m² CD-L2), while PoinTr, GRNet, and ODGNet change relative order across variants, suggesting sensitivity to different error magnitudes. Qualitative results show that low Chamfer Distance does not guarantee recovery of inventory-relevant morphology, including stem taper and branch insertions. Euca3D provides a reproducible baseline for evaluating completion on field-acquired vegetation, while simulated occlusion, consumer-grade sensing, and a single genotype limit generalizability.',
  },
  {
    title:
      'LocalizeSORT: Localization-based Stationary Object Tracking in Precision Agriculture',
    contactAuthor: 'Srihari Vemuru',
    contactEmail: 'vemshari@iastate.edu',
    authors: [
      { name: 'Srihari Vemuru', affiliation: 'Iowa State University, USA' },
      { name: 'Sarvesh Prasanth', affiliation: 'University of Southern California, USA' },
      { name: 'Kumar Ankit', affiliation: 'Indian Institute of Science, India' },
      { name: 'Debasish Ghose', affiliation: 'Indian Institute of Science, India' },
      { name: 'Shishir Kolathaya', affiliation: 'Indian Institute of Science, India' },
    ],
    abstract:
      'Yield prediction is being revolutionized by AI and robotics, enabling efficient resource allocation and cutting costs in agriculture. ML-based object tracking models are becoming increasingly accurate at counting objects. DeepSORT and StrongSORT are the current state-of-the-art (SOTA) tracking models; however, they still struggle with counting objects in agricultural scenarios. The shortcomings of SOTA can be overcome by leveraging the stationary nature of target objects in agricultural settings, such as fruits or crops. We propose LocalizeSORT, an enhancement to the SOTA that incorporates world coordinates (WCs) of objects into the Kalman Filter framework, leveraging the stationary nature of the tracked objects. By using WC closeness along with appearance and bounding box motion for the association of detections and Kalman tracks, the proposed method enhances association accuracy. We evaluate LocalizeSORT on two external agricultural datasets and a new in-house mango dataset and compare them on metrics MOTA, HOTA, HOTA0, ID switches, and the count of objects tracked. LocalizeSORT exceeds DeepSORT and StrongSORT by nearly 49.6% and 14.9%, respectively, in HOTA, and 207% and 30.9%, respectively, in yield prediction accuracy. These results suggest LocalizeSORT as a strong baseline for tracking stationary objects in agricultural settings.',
  },
  {
    title: '3D Grapevine Disease Quantification and Mapping',
    contactAuthor: 'Yu Jiang',
    contactEmail: 'yujiang@cornell.edu',
    authors: [
      { name: 'Yiyuan Lin', affiliation: CORNELL },
      { name: 'Ruiming Du', affiliation: CORNELL },
      { name: 'Cole Regnier', affiliation: CORNELL },
      { name: 'Kaitlin M. Gold', affiliation: CORNELL },
      { name: 'Yu Jiang', affiliation: CORNELL },
    ],
    abstract:
      'Autonomous imaging enables dense observation of vineyards, but analysis in image space can give biased estimates for real applications. In disease phenotyping, for example, it gives more weight to canopy regions that are imaged repeatedly and loses the physical locations of predicted symptoms. In this study, we present a workflow for 3D disease mapping at field scale. Stereo images acquired under active illumination are used for metric reconstruction, while SAM-CLIP models segment canopy, powdery mildew (PM), and downy mildew (DM) in each image. Local reconstructions are registered with GNSS position and heading and voxelized into a global grid, and each voxel is reprojected into the images with visibility checks to collect its labels. This produces a georeferenced 3D disease map from which disease severity is computed for each vineyard panel. Across 480 matched observations with human scouting conducted within two days of each robotic acquisition, the 3D method improved PM agreement from r = 0.922 and MAE = 5.8% for the 2D image baseline to r = 0.960 and MAE = 1.9%, and DM agreement from r = 0.939 and MAE = 4.8% to r = 0.969 and MAE = 1.9%. The 3D method also reduced the systematic positive bias of the 2D baseline and was stable to grid placement. In addition, pose recovery from images alone was unreliable under active illumination, which motivates the use of GNSS position and heading for registration. These results show the value of 3D spatial normalization and GNSS supported registration for robotic disease phenotyping at field scale. Code is available at https://github.com/YiyuanLinXX/3D_Vineyard_Reconstruction.',
  },
  {
    title:
      'Decoding Frozen Vision Representations for Training-Free Few-Shot Pineapple Detection',
    contactAuthor: 'Manfred Gonzalez-Hernandez',
    contactEmail: 'm.gonzalez.hernandez@tue.nl',
    authors: [
      { name: 'Manfred Gonzalez-Hernandez', affiliation: TUE },
      { name: 'Danny Xie-Li', affiliation: 'University of Luxembourg' },
      { name: 'Fabian Fallas-Moya', affiliation: 'Universidad de Costa Rica' },
      { name: 'Camile Lendering', affiliation: TUE },
      { name: 'Joaquín Figueira', affiliation: TUE },
      { name: 'Erkut Akdag', affiliation: TUE },
      { name: "Giacomo D'Amicantonio", affiliation: TUE },
      { name: 'Egor Bondarev', affiliation: TUE },
    ],
    abstract:
      'Few-shot object detection in agricultural imagery is hampered by dense vegetation, repeated patterns, and scarce annotations. We present a training-free detector that turns dense features from frozen visual foundation models directly into detections, without fine-tuning, a learned head, or external proposals: a whitened foreground–background direction estimated from annotated support images scores every query patch, and the score field is decoded with an adaptive threshold and support-derived geometry. We also test whether predicted relative depth can be fed directly to RGB-pretrained frozen encoders. On aerial pineapple imagery, the detector outperforms PET-DINO and GeCo2 at every evaluated support size; at K = 40, predicted depth alone reaches 92% of the RGB performance with DINOv2, and RGB–depth fusion lowers counting error for both encoders. We release the Pineapple Plantation dataset (4,908 aerial frames, 1,995 annotated with 17,609 boxes, predicted depth, leakage-aware splits) and analyse transfer to two further agricultural datasets.',
  },
  {
    title:
      'Vision-language models see more about agriculture than they report and test-time scaling remains bounded by parametric knowledge',
    contactAuthor: 'Earl Ranario',
    contactEmail: 'ewranario@ucdavis.edu',
    authors: [
      { name: 'Earl Ranario', affiliation: UCD },
      { name: 'Jared Smith', affiliation: UCD },
      { name: 'Urmil Jatin Chandarana', affiliation: UCD },
      { name: 'Lars Lundqvist', affiliation: UCD },
      { name: 'Bharath Ram Sridhar', affiliation: UCD },
      { name: 'Mason Earles', affiliation: UCD },
    ],
    abstract:
      "Vision-language models (VLMs) show promise for agricultural diagnosis but fail unpredictably in zero-shot settings. We test whether this stems from poor visual features or an inability to verbalize what the model already perceives, using a benchmark spanning classification and detection drawn from 118 AgML classification and 54 detection datasets. Linear probing shows agricultural features are linearly separable in frozen VLM vision towers, with Gemma-4-31B's encoder reaching F1-macro of 0.60-0.78 across tasks and approaching the vision-only DINOv3 backbone, indicating the bottleneck lies downstream of perception. We then test whether test-time scaling, an iterative in-context skill-memory loop, can close this gap without updating weights. Gains are modest and inconsistent. Skill-memory improves classification accuracy by up to 3.1 points on three of four tasks while regressing on species, with gains concentrated on classes seen during optimization and unseen classes regressing. Detection F1 is effectively unchanged (0.412 to 0.421), though an oracle filtering condition reaches 0.432 F1, revealing real headroom unconstrained prompting fails to surface. These results indicate VLMs see more agricultural features than they report, but test-time scaling alone fails to surface that hidden parametric knowledge, motivating agentic approaches grounded in external, retrievable knowledge.",
  },
  {
    title: 'Is It the Model or the Data? Measuring Dataset Quality in Agricultural Vision',
    contactAuthor: 'Urmil Jatin Chandarana',
    contactEmail: 'uchandar@ucdavis.edu',
    authors: [
      { name: 'Earl Ranario', affiliation: UCD },
      { name: 'Jared Smith', affiliation: UCD },
      { name: 'Urmil Jatin Chandarana', affiliation: UCD },
      { name: 'Lars Lundqvist', affiliation: UCD },
      { name: 'Bharath Sridhar', affiliation: UCD },
      { name: 'Mason Earles', affiliation: UCD },
      { name: 'Brian Bailey', affiliation: UCD },
      { name: 'Christine Diepenbrock', affiliation: UCD },
    ],
    abstract:
      "Public agricultural image datasets are growing fast, but they are released in many formats and with no common check of their quality. We present a benchmark that measures the quality of image classification datasets before any model is trained on them. Using datasets standardized by Project AgML, we ran a three-phase pipeline on 809 datasets with 1.48 million images: 84 curated datasets and 725 single-species subsets of iNatAg. The pipeline reports ten metrics grouped into four axes: structural quality, content difficulty, diversity and annotation reliability. Quality problems are common in the curated datasets: 58% have more than 5% near-duplicate images, 37% have more than 1% of their images with an exact copy in another split, and 30% have an estimated label noise rate above 5%. We then test whether these metrics predict model performance on 20 curated datasets. For fine-tuned ViT-Small and DINOv2-Small models, the overall quality score correlates with macro F1 (Spearman rho = 0.62). The estimated label noise (rho = -0.84), the accuracy of a reference ResNet-18 (rho = 0.84) and class separability (rho = 0.79) track F1 most closely, while duplicate and leakage rates show no clear relationship. For zero-shot SigLIP, Gemma 4 and Qwen 3.5, the content difficulty axis still holds (rho = 0.68), but the link with the overall score depends on the performance measure (rho = 0.34 with Cohen's kappa, 0.64 with macro F1).",
  },
  {
    title:
      'Does It Depend on the Split? Frozen Satellite Features vs. Fine-Tuned CNNs for Tree Species Mapping',
    contactAuthor: 'Dharani Deivasihamani',
    contactEmail: 'dharani@satsure.co',
    authors: [
      { name: 'Dharani Deivasihamani', affiliation: 'SatSure' },
      { name: 'Nandakishore Puttashamachar', affiliation: 'SatSure' },
    ],
    abstract:
      'Self-supervised foundation models are often said to need fewer labels than supervised training. We test this on a forestry task: classifying 20 tree species classes in 0.2 m aerial images from the TreeSatAI dataset. We compare a frozen DINOv3 model pretrained on 493 million satellite images, with only a linear classifier trained on top, against an ImageNet ResNet-50 that is fine-tuned end to end. On the official split, fine-tuning wins clearly (macro F1 0.764 vs. 0.685). However, 28.8% of the official test patches overlap a training or validation patch, and copying the label of the nearest such patch is correct for 83.6% of them. We therefore build a spatial split that holds out whole 2 km squares with a 200 m buffer. On this split the comparison becomes inconclusive (0.648 vs. 0.640, paired 95% CI of the difference [-0.054, 0.016]), and the learning curves of the two models overlap at every label budget from 343 to 33,126 training patches. On the five rarest classes, the frozen model achieves a higher mean F1 (0.566 vs. 0.445), although the confidence interval for this difference includes zero ([-0.05, 0.23]). Diagnostics show that the frozen features mainly miss differences between closely related species, such as the two native oaks. Choosing the input size and layer on validation data (224 px, block 16) raises the frozen model to 0.662 on the spatial split. A comparison that looks decisive on the official split is thus inconclusive under geographically separated evaluation. We release the spatial split and our code.',
  },
  {
    title:
      'FoRGB-D: An Integrated Mobile Acquisition Platform for Eucalyptus Trunk Geometry Analysis',
    contactAuthor: 'Fabrizzio Soares',
    contactEmail: 'fabrizzio@ufg.br',
    authors: [
      { name: 'Allan Kardec Lopes', affiliation: UFG },
      { name: 'Welington Galvão Rodrigues', affiliation: UFG },
      { name: 'Gabriel da Silva Vieira', affiliation: UFG },
      { name: 'Juliana Felix', affiliation: UFG },
      { name: 'Christian Cabacinha', affiliation: 'Universidade Federal de Minas Gerais' },
      { name: 'Helio Pedrini', affiliation: UNICAMP },
      { name: 'Fabrizzio Soares', affiliation: UFG },
    ],
    abstract:
      'Automating forest inventory measurements using computer vision is an alternative for sustainable forest management and scalable yield estimation. However, existing monocular depth estimation models struggle to generalize to forestry environments due to the lack of domain-specific datasets capturing irregular trunk geometry, dense vegetation, and complex lighting conditions. To bridge this gap, this paper introduces FoRGB-D, a specialized RGB-D dataset comprising 1,900 aligned RGB images and depth maps, paired with IMU, GPS, and compass sensor telemetry, collected across 100 eucalyptus trees under real field conditions using a custom Android application (ForestSense Collector) and an Intel RealSense D435i sensor. To establish a benchmark, a stratified subset of 205 image pairs was annotated at the standard height of 1.30 m and evaluated using a closed-form geometric depth model against ground-truth Diameter at Breast Height (DBH) field measurements. The baseline evaluation achieved a Mean Absolute Error (MAE) of 0.240 cm, a Root Mean Square Error (RMSE) of 0.314 cm, a relative RMSE (rRMSE) of 2.195%, and a bias of -0.013 cm. These results demonstrate the potential of the captured depth data for geometric diameter estimation using manually annotated trunk boundaries, providing a reference for future automated forest inventory methods.',
  },
  {
    title:
      'From Percentage Cards to Foundation Models: Zero-Shot Tree Height Estimation from a Single Photograph',
    contactAuthor: 'Ambreen Hussain',
    contactEmail: 'Ambreen.Hussain@bcu.ac.uk',
    authors: [
      { name: 'Ambreen Hussain', affiliation: BCU },
      { name: 'Raouf Abozariba', affiliation: BCU },
      { name: 'Martin Esugo', affiliation: BCU },
      { name: 'De Mi', affiliation: BCU },
      { name: 'Junaid Arshad', affiliation: BCU },
      // Affiliation not provided in the submission sheet.
      { name: 'Taufiq Asyhari', affiliation: '' },
    ],
    abstract:
      "Tree height is a key variable for assessing forest health; however, traditional methods of measurement are time-consuming, tedious and sometimes intrusive. Some methods showed fragile image analysis and weak geometric models, whereas Deep Learning-based methods depend on task-specific annotated training data, extra hardware and are expensive. We present a non-intrusive method of tree height estimation from a photograph taken from the ground, with a banner of known height placed at the foot of the tree. Our methodology evolved through three versions: in the first version, a printed percentage card is photographed together with the tree, and the banner's percentage is read with image processing and text recognition. In field trials, this gave errors of 1.7-3.5% (mean 2.8%) against traditional measurements. The second version replaces the card with an app: the user marks the base and the top of the tree, the app splits the tree into 100 equal parts, and one more mark at the top of the banner gives the height, with each reading verified by machine vision. The third version, and the focus of this paper, removes the manual marking. Grounding DINO finds the tree and the banner from text prompts, SAM 2.1 segments them, and the tree's top and base and the banner's two ends are taken from the cleaned masks. No training data is needed; it runs on an ordinary CPU, and simple checks warn the user when a photograph breaks the method's assumptions. We tested it on new street photographs of trees, a utility pole and a lamp post. It found the object and the banner every time, and repeated photographs of the same object gave close results (1.3% apart for the lamp post; a coefficient of variation of 2.1% for a birch). Against depth-camera reference heights for all objects, the automatic heights were 6.0% off on average, or 5.0% when the photographs of each object were averaged, compared with 4.4% for manual marking with the app on the same objects and 2.8% for the card-based version.",
  },
  {
    title:
      'Streaming Broiler Behavior Segmentation: A Feature-Based Framework and Comparative Study',
    contactAuthor: 'Tien-Yu Chi',
    contactEmail: 'tien-yu.chi@berkeley.edu',
    authors: [{ name: 'Tien-Yu Chi', affiliation: 'University of California, Berkeley' }],
    abstract:
      'Continuous poultry monitoring requires identifying both what a bird is doing and when its behavior changes. Models that recognize behaviors similarly well in individual video frames can still differ substantially in predicting when those behaviors begin and end. We present a causal, feature-based framework for streaming broiler behavior segmentation using per-bird observation sequences constructed from Big Broiler annotations. The prepared task contains 4,476 sequences and 968,555 labeled observations. Using frozen DINOv2 features at 5 FPS, we compare a frame-independent baseline, a causal temporal convolutional network, a causal Transformer, Mamba-2, and Gated DeltaNet on a shared 30-class task. In the main comparison, the Transformer more than doubles segment F1@50 from 4.33% to 9.46%, while classification accuracy on individual frames changes only from 60.66% to 61.24%. Mamba-2 achieves the highest mean frame accuracy at 62.07%, but its segmentation gap with the Transformer narrows in comparisons with the same depth and similar parameter counts. Ablations show that larger recurrent states do not consistently improve performance and that temporal scores are sensitive to sampling rate. Rare-class recognition remains weak across model families, and visual analysis reveals errors during sustained activities and visibility changes. Our findings demonstrate the benefits of temporal modeling while highlighting potential data limitations, motivating better coverage of rare behaviors and richer visual context for reliable poultry monitoring.',
  },
  {
    title: 'Hyperspectral Soil Moisture Estimation: Rule-Based and Machine Learning Perspectives',
    contactAuthor: 'Jakub Nalepa',
    contactEmail: 'jnalepa@ieee.org',
    authors: [
      { name: 'Lukasz Tulczyjew', affiliation: SUT },
      { name: 'Michal Myller', affiliation: SUT },
      { name: 'Adam Gudys', affiliation: SUT },
      {
        name: 'Bogdan Ruszczak',
        affiliation: 'AGH University of Krakow, Poland; Opole University of Technology, Poland',
      },
      {
        name: 'Agata M. Wijata',
        affiliation: `${SUT}; Warsaw University of Technology, Poland`,
      },
      {
        name: 'Dominika Boguszewska-Mankowska',
        affiliation:
          'Plant Breeding and Acclimatization Institute–National Research Institute, Poland',
      },
      { name: 'Michal Staniszewski', affiliation: SUT },
      { name: 'Jakub Nalepa', affiliation: `${SUT}; KP Labs, Poland` },
    ],
    abstract:
      'Accurate soil moisture estimation supports irrigation management, crop yield, and quality in precision agriculture, particularly for potatoes, which are sensitive to water deficits. Existing in-situ methods are costly, difficult to scale, and provide coarse readings. We propose automated, spatially scalable soil moisture estimation from hyperspectral images using interpretable rule-based and classical machine learning methods, the latter relying on understandable features. Experiments on a comprehensive dataset spanning an entire potato growing season demonstrated accurate estimation: rule-based methods outperformed classical and deep learning approaches, achieving the lowest mean absolute and mean squared errors of 2.38 and 9.48.',
  },
  {
    title: 'Rethinking Field 3D Reconstruction in the Era of Agentic AI',
    contactAuthor: 'Yu Jiang',
    contactEmail: 'yujiang@cornell.edu',
    authors: [
      { name: 'Ruiming Du', affiliation: CORNELL },
      { name: 'Yiyuan Lin', affiliation: CORNELL },
      { name: 'Tian Qiu', affiliation: CORNELL },
      { name: 'Alan Zayd Zoubi', affiliation: CORNELL },
      { name: 'Yu Jiang', affiliation: CORNELL },
    ],
    abstract:
      "3D reconstruction in field environments remains a long-standing challenge in computer vision due to constrained viewpoints, variable image quality, and complex scene geometry, coupled with the high accuracy requirements of downstream applications. Recent advances in stereo matching and feed-forward reconstruction networks have substantially improved reconstruction quality in general settings. However, their generalization to real-world field conditions remains limited, as commonly used benchmark datasets often fail to capture the diversity and complexity of field environments. With the emergence of agentic AI as a powerful tool across research domains, we investigate its potential to address this last-mile challenge. Given identical image sequences captured in field environments, we find that an AI coding agent achieves substantially higher reconstruction quality in significantly less time than human researchers, who often struggle to effectively adapt state-of-the-art methods to unfamiliar data. Further analysis of this human-agent performance gap reveals that agentic AI excels at identifying poorly constrained geometric features in field imagery and systematically proposing, testing, and selecting engineering strategies from a broad range of candidates to address these deficiencies. We characterize such tasks, which require continuous monitoring of image features throughout the research loop, iterative experimentation, and substantial engineering effort, as agentic-AI-shaped problems in field 3D reconstruction, where human researchers face limitations in engineering bandwidth. In the era of agentic AI, we argue that the researcher's role is shifting from pipeline implementation toward problem formulation, rigorous evaluation, scientific judgment, and the development of AI-enabling infrastructure, such as field imaging systems.",
  },
  {
    title:
      'Low-Cost Instance Segmentation and Metric 3D Cut-Point Localization for Automated Raspberry Cane Pruning',
    contactAuthor: 'Rajveer Dhillon',
    contactEmail: 'rdhillon@centralstate.edu',
    authors: [
      { name: 'Nassim Bessaad', affiliation: CSU },
      { name: 'Rajveer Dhillon', affiliation: CSU },
      { name: 'Sena Atsyo', affiliation: 'University of Florida' },
      { name: 'Titus L. Lockhart', affiliation: CSU },
      // Affiliation not provided in the submission sheet.
      { name: 'Jahiem Wilson', affiliation: '' },
    ],
    abstract:
      'Automated pruning of trellised raspberry canes requires reliable perception of cane structures and accurate localization of candidate cut points in complex field environments. This study develops an RGB-based perception framework toward robotic pruning by combining instance segmentation with an exploratory single-image 3D localization pipeline. A dataset of 666 labeled field images is used to evaluate cane segmentation under a held-out cross-row test protocol. Among the evaluated configurations, YOLO26s-seg provides a favorable accuracy-efficiency trade-off, achieving a mask mAP50-95 of 0.335 with 10.4M parameters and an inference time of 4 ms per image on an NVIDIA GTX A6000 GPU. Beyond 2D segmentation, the proposed pipeline combines monocular metric depth estimation, geometric cane segmentation, depth and color continuity for cane tracing, and ground-plane estimation derived from cane geometry to infer candidate pruning locations in 3D. This geometry-based approach is intended to support localization when the soil surface is partially or fully occluded by foliage. The framework establishes a foundation for integrating image-based cane perception and 3D cut-point estimation into robotic pruning systems.',
  },
];

// Distinct institutions across a paper's authors, in first-appearance order.
export const affiliationsOf = (paper) => [
  ...new Set(
    paper.authors.flatMap((a) => a.affiliation.split('; ')).filter(Boolean),
  ),
];
