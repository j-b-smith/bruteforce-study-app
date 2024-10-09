import { Course } from "../../types";

const anatomyAndPhysiologyII: Course = {
  name: "Anatomy and Physiology II",
  categories: [
    {
      name: "Endocrine System",
      flashcards: [],
      questions: [
        {
          categoryName: "Endocrine System",
          text: "What is the endocrine system?",
          options: [
            {
              text: "A collection of ductless glands that secrete hormones",
              explanation:
                "Correct. The endocrine system consists of glands that release hormones directly into the bloodstream.",
              isCorrect: true,
            },
            {
              text: "A system of nerves",
              explanation:
                "Incorrect. The nervous system is responsible for transmitting electrical signals throughout the body.",
              isCorrect: false,
            },
            {
              text: "A set of muscles",
              explanation:
                "Incorrect. Muscles are part of the muscular system, which is responsible for movement.",
              isCorrect: false,
            },
            {
              text: "A group of bones",
              explanation:
                "Incorrect. Bones are part of the skeletal system, which supports and protects the body.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the role of the hypothalamus?",
          options: [
            {
              text: "Controls the pituitary gland",
              explanation:
                "Correct. The hypothalamus regulates the pituitary gland, which in turn controls other endocrine glands.",
              isCorrect: true,
            },
            {
              text: "Regulates digestion",
              explanation:
                "Incorrect. Digestion is primarily controlled by the digestive system, though the hypothalamus does influence hunger.",
              isCorrect: false,
            },
            {
              text: "Manages blood flow",
              explanation:
                "Incorrect. Blood flow is primarily managed by the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Controls breathing",
              explanation:
                "Incorrect. Breathing is controlled by the respiratory system, specifically the medulla oblongata in the brainstem.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of the pituitary gland?",
          options: [
            {
              text: "Regulates other endocrine glands",
              explanation:
                "Correct. The pituitary gland is often called the 'master gland' because it controls other endocrine glands.",
              isCorrect: true,
            },
            {
              text: "Controls digestion",
              explanation:
                "Incorrect. Digestion is primarily regulated by the digestive system.",
              isCorrect: false,
            },
            {
              text: "Manages blood circulation",
              explanation:
                "Incorrect. Blood circulation is managed by the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Filters waste from the blood",
              explanation:
                "Incorrect. Waste filtration is primarily the function of the kidneys.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the thyroid gland responsible for?",
          options: [
            {
              text: "Regulating metabolism",
              explanation:
                "Correct. The thyroid gland produces hormones that regulate metabolism, energy levels, and growth.",
              isCorrect: true,
            },
            {
              text: "Controlling blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are primarily controlled by the pancreas.",
              isCorrect: false,
            },
            {
              text: "Producing adrenaline",
              explanation:
                "Incorrect. Adrenaline is produced by the adrenal glands.",
              isCorrect: false,
            },
            {
              text: "Regulating breathing rate",
              explanation:
                "Incorrect. Breathing rate is controlled by the respiratory system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What are the adrenal glands responsible for?",
          options: [
            {
              text: "Producing adrenaline and cortisol",
              explanation:
                "Correct. The adrenal glands produce hormones like adrenaline and cortisol that help manage stress responses.",
              isCorrect: true,
            },
            {
              text: "Controlling blood pressure",
              explanation:
                "Incorrect. While adrenal hormones can affect blood pressure, the primary control is through the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Managing oxygen levels",
              explanation:
                "Incorrect. Oxygen levels are regulated by the respiratory and circulatory systems.",
              isCorrect: false,
            },
            {
              text: "Filtering blood",
              explanation:
                "Incorrect. The kidneys are responsible for filtering blood.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the anterior pituitary gland?",
          options: [
            {
              text: "TSH, ACTH, GH, LH, FSH, Prolactin",
              explanation:
                "Correct. The anterior pituitary gland produces these hormones which regulate various physiological processes.",
              isCorrect: true,
            },
            {
              text: "Oxytocin and ADH",
              explanation:
                "Incorrect. These hormones are produced by the hypothalamus and stored/released by the posterior pituitary.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "Cortisol and Aldosterone",
              explanation:
                "Incorrect. These hormones are produced by the adrenal cortex.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of TSH (Thyroid-Stimulating Hormone)?",
          options: [
            {
              text: "Stimulates the thyroid gland to produce thyroid hormones",
              explanation:
                "Correct. TSH stimulates the thyroid gland to release T3 and T4 hormones, which regulate metabolism.",
              isCorrect: true,
            },
            {
              text: "Stimulates milk production",
              explanation: "Incorrect. Prolactin stimulates milk production.",
              isCorrect: false,
            },
            {
              text: "Regulates blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Controls calcium levels in the blood",
              explanation:
                "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of ACTH (Adrenocorticotropic Hormone)?",
          options: [
            {
              text: "Stimulates the adrenal cortex to release cortisol",
              explanation:
                "Correct. ACTH stimulates the adrenal cortex to produce cortisol, a hormone that helps manage stress and metabolism.",
              isCorrect: true,
            },
            {
              text: "Stimulates the production of sex hormones",
              explanation:
                "Incorrect. LH and FSH stimulate the production of sex hormones.",
              isCorrect: false,
            },
            {
              text: "Controls water balance",
              explanation:
                "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
              isCorrect: false,
            },
            {
              text: "Regulates growth",
              explanation: "Incorrect. Growth hormone (GH) regulates growth.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of GH (Growth Hormone)?",
          options: [
            {
              text: "Promotes growth, cell reproduction, and regeneration",
              explanation:
                "Correct. GH stimulates growth in tissues, especially bones and muscles.",
              isCorrect: true,
            },
            {
              text: "Regulates metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
              isCorrect: false,
            },
            {
              text: "Stimulates the production of red blood cells",
              explanation:
                "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
              isCorrect: false,
            },
            {
              text: "Controls calcium levels in the blood",
              explanation:
                "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of LH (Luteinizing Hormone) and FSH (Follicle-Stimulating Hormone)?",
          options: [
            {
              text: "Regulate reproductive processes",
              explanation:
                "Correct. LH triggers ovulation and stimulates the production of sex hormones, while FSH stimulates the growth of ovarian follicles and sperm production.",
              isCorrect: true,
            },
            {
              text: "Stimulate milk production",
              explanation: "Incorrect. Prolactin stimulates milk production.",
              isCorrect: false,
            },
            {
              text: "Regulate blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Control water balance",
              explanation:
                "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the role of prolactin?",
          options: [
            {
              text: "Stimulates milk production in the mammary glands",
              explanation: "Correct. Prolactin promotes lactation in mammals.",
              isCorrect: true,
            },
            {
              text: "Stimulates the thyroid gland",
              explanation: "Incorrect. TSH stimulates the thyroid gland.",
              isCorrect: false,
            },
            {
              text: "Regulates blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Controls metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are stored and released by the posterior pituitary gland?",
          options: [
            {
              text: "ADH and Oxytocin",
              explanation:
                "Correct. The posterior pituitary stores and releases ADH and Oxytocin, both produced by the hypothalamus.",
              isCorrect: true,
            },
            {
              text: "TSH and ACTH",
              explanation:
                "Incorrect. These hormones are produced by the anterior pituitary gland.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "Cortisol and Aldosterone",
              explanation:
                "Incorrect. These hormones are produced by the adrenal cortex.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of ADH (Antidiuretic Hormone)?",
          options: [
            {
              text: "Promotes water retention by the kidneys",
              explanation:
                "Correct. ADH helps to reduce urine volume and maintain blood pressure by promoting water reabsorption in the kidneys.",
              isCorrect: true,
            },
            {
              text: "Regulates blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Stimulates the production of sex hormones",
              explanation:
                "Incorrect. LH and FSH stimulate the production of sex hormones.",
              isCorrect: false,
            },
            {
              text: "Regulates calcium levels in the blood",
              explanation:
                "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of oxytocin?",
          options: [
            {
              text: "Triggers uterine contractions during childbirth and milk ejection during breastfeeding",
              explanation:
                "Correct. Oxytocin plays a crucial role in childbirth and lactation.",
              isCorrect: true,
            },
            {
              text: "Regulates the menstrual cycle",
              explanation:
                "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
              isCorrect: false,
            },
            {
              text: "Lowers blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin.",
              isCorrect: false,
            },
            {
              text: "Controls metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the thyroid gland?",
          options: [
            {
              text: "T3, T4, and Calcitonin",
              explanation:
                "Correct. The thyroid gland produces T3 and T4, which regulate metabolism, and Calcitonin, which lowers blood calcium levels.",
              isCorrect: true,
            },
            {
              text: "TSH and ACTH",
              explanation:
                "Incorrect. These hormones are produced by the anterior pituitary gland.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "ADH and Oxytocin",
              explanation:
                "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of T3 and T4?",
          options: [
            {
              text: "Regulate metabolism, heart rate, and body temperature",
              explanation:
                "Correct. T3 and T4 are thyroid hormones that play a crucial role in metabolic processes and thermoregulation.",
              isCorrect: true,
            },
            {
              text: "Regulate blood pressure",
              explanation:
                "Incorrect. Blood pressure is primarily regulated by the cardiovascular system and hormones like aldosterone.",
              isCorrect: false,
            },
            {
              text: "Control water balance",
              explanation:
                "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
              isCorrect: false,
            },
            {
              text: "Stimulate milk production",
              explanation: "Incorrect. Prolactin stimulates milk production.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of calcitonin?",
          options: [
            {
              text: "Lowers blood calcium levels",
              explanation:
                "Correct. Calcitonin inhibits osteoclast activity and promotes calcium deposition in bones.",
              isCorrect: true,
            },
            {
              text: "Raises blood calcium levels",
              explanation:
                "Incorrect. Parathyroid hormone (PTH) raises blood calcium levels.",
              isCorrect: false,
            },
            {
              text: "Regulates metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
              isCorrect: false,
            },
            {
              text: "Controls blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the parathyroid glands?",
          options: [
            {
              text: "PTH (Parathyroid Hormone)",
              explanation:
                "Correct. The parathyroid glands produce PTH, which regulates blood calcium levels.",
              isCorrect: true,
            },
            {
              text: "T3 and T4",
              explanation:
                "Incorrect. These hormones are produced by the thyroid gland.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "ADH and Oxytocin",
              explanation:
                "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of PTH (Parathyroid Hormone)?",
          options: [
            {
              text: "Raises blood calcium levels",
              explanation:
                "Correct. PTH stimulates osteoclast activity, increases calcium reabsorption in the kidneys, and enhances calcium absorption in the intestines.",
              isCorrect: true,
            },
            {
              text: "Lowers blood calcium levels",
              explanation: "Incorrect. Calcitonin lowers blood calcium levels.",
              isCorrect: false,
            },
            {
              text: "Regulates metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
              isCorrect: false,
            },
            {
              text: "Stimulates the thyroid gland",
              explanation: "Incorrect. TSH stimulates the thyroid gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the adrenal cortex?",
          options: [
            {
              text: "Glucocorticoids, Mineralocorticoids, and Androgens",
              explanation:
                "Correct. The adrenal cortex produces these hormones, which regulate stress response, electrolyte balance, and secondary sexual characteristics.",
              isCorrect: true,
            },
            {
              text: "Adrenaline and Noradrenaline",
              explanation:
                "Incorrect. These hormones are produced by the adrenal medulla.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "T3, T4, and Calcitonin",
              explanation:
                "Incorrect. These hormones are produced by the thyroid gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of cortisol?",
          options: [
            {
              text: "Regulates metabolism, reduces inflammation, and helps the body respond to stress",
              explanation:
                "Correct. Cortisol is a glucocorticoid hormone that plays a key role in the body's stress response.",
              isCorrect: true,
            },
            {
              text: "Lowers blood calcium levels",
              explanation: "Incorrect. Calcitonin lowers blood calcium levels.",
              isCorrect: false,
            },
            {
              text: "Regulates blood sugar levels",
              explanation:
                "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Controls water balance",
              explanation:
                "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of aldosterone?",
          options: [
            {
              text: "Regulates sodium and potassium balance by promoting sodium retention and potassium excretion",
              explanation:
                "Correct. Aldosterone helps maintain fluid and electrolyte balance by acting on the kidneys.",
              isCorrect: true,
            },
            {
              text: "Regulates blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Promotes the production of red blood cells",
              explanation:
                "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
              isCorrect: false,
            },
            {
              text: "Stimulates milk production",
              explanation: "Incorrect. Prolactin stimulates milk production.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the adrenal medulla?",
          options: [
            {
              text: "Epinephrine and Norepinephrine",
              explanation:
                "Correct. The adrenal medulla produces these catecholamines, which prepare the body for fight-or-flight responses.",
              isCorrect: true,
            },
            {
              text: "Cortisol and Aldosterone",
              explanation:
                "Incorrect. These hormones are produced by the adrenal cortex.",
              isCorrect: false,
            },
            {
              text: "Insulin and Glucagon",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "T3 and T4",
              explanation:
                "Incorrect. These hormones are produced by the thyroid gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of epinephrine and norepinephrine?",
          options: [
            {
              text: "Prepare the body for fight-or-flight responses",
              explanation:
                "Correct. Epinephrine and norepinephrine increase heart rate, blood pressure, and blood glucose levels in response to stress.",
              isCorrect: true,
            },
            {
              text: "Regulate blood calcium levels",
              explanation:
                "Incorrect. Blood calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
              isCorrect: false,
            },
            {
              text: "Control water balance",
              explanation:
                "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
              isCorrect: false,
            },
            {
              text: "Regulate metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the pancreas?",
          options: [
            {
              text: "Insulin and Glucagon",
              explanation:
                "Correct. The pancreas produces these hormones, which regulate blood glucose levels.",
              isCorrect: true,
            },
            {
              text: "Cortisol and Aldosterone",
              explanation:
                "Incorrect. These hormones are produced by the adrenal cortex.",
              isCorrect: false,
            },
            {
              text: "Epinephrine and Norepinephrine",
              explanation:
                "Incorrect. These hormones are produced by the adrenal medulla.",
              isCorrect: false,
            },
            {
              text: "T3 and T4",
              explanation:
                "Incorrect. These hormones are produced by the thyroid gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of insulin?",
          options: [
            {
              text: "Lowers blood glucose levels by promoting glucose uptake into cells",
              explanation:
                "Correct. Insulin helps decrease blood sugar levels by facilitating the uptake of glucose by cells.",
              isCorrect: true,
            },
            {
              text: "Raises blood glucose levels",
              explanation: "Incorrect. Glucagon raises blood glucose levels.",
              isCorrect: false,
            },
            {
              text: "Regulates sodium and potassium balance",
              explanation:
                "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
              isCorrect: false,
            },
            {
              text: "Promotes water retention by the kidneys",
              explanation: "Incorrect. Water retention is promoted by ADH.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of glucagon?",
          options: [
            {
              text: "Raises blood glucose levels by promoting glycogen breakdown and glucose release by the liver",
              explanation:
                "Correct. Glucagon increases blood glucose levels by stimulating the liver to convert stored glycogen into glucose.",
              isCorrect: true,
            },
            {
              text: "Lowers blood glucose levels",
              explanation: "Incorrect. Insulin lowers blood glucose levels.",
              isCorrect: false,
            },
            {
              text: "Regulates sodium and potassium balance",
              explanation:
                "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
              isCorrect: false,
            },
            {
              text: "Promotes water retention by the kidneys",
              explanation: "Incorrect. Water retention is promoted by ADH.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of melatonin?",
          options: [
            {
              text: "Regulates sleep-wake cycles and circadian rhythms",
              explanation:
                "Correct. Melatonin production increases in response to darkness, promoting sleep.",
              isCorrect: true,
            },
            {
              text: "Regulates blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
              isCorrect: false,
            },
            {
              text: "Controls metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
              isCorrect: false,
            },
            {
              text: "Promotes the production of red blood cells",
              explanation:
                "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What hormones are produced by the ovaries?",
          options: [
            {
              text: "Estrogen and Progesterone",
              explanation:
                "Correct. The ovaries produce these hormones, which regulate the menstrual cycle and maintain pregnancy.",
              isCorrect: true,
            },
            {
              text: "Incorrect. Testosterone and androgens are primarily produced by the testes.",
              explanation:
                "Incorrect. These hormones are produced by the pancreas.",
              isCorrect: false,
            },
            {
              text: "Cortisol and Aldosterone",
              explanation:
                "Incorrect. These hormones are produced by the adrenal cortex.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of estrogen?",
          options: [
            {
              text: "Regulates the menstrual cycle and promotes secondary sexual characteristics",
              explanation:
                "Correct. Estrogen plays a key role in regulating the menstrual cycle and the development of secondary sexual characteristics.",
              isCorrect: true,
            },
            {
              text: "Stimulates milk production",
              explanation: "Incorrect. Prolactin stimulates milk production.",
              isCorrect: false,
            },
            {
              text: "Lowers blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin.",
              isCorrect: false,
            },
            {
              text: "Controls metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of progesterone?",
          options: [
            {
              text: "Prepares the uterus for implantation and maintains pregnancy",
              explanation:
                "Correct. Progesterone prepares the uterus for implantation of a fertilized egg and helps maintain pregnancy.",
              isCorrect: true,
            },
            {
              text: "Regulates the menstrual cycle",
              explanation:
                "Incorrect. While progesterone is involved in the menstrual cycle, its primary function is to maintain pregnancy.",
              isCorrect: false,
            },
            {
              text: "Increases blood calcium levels",
              explanation:
                "Incorrect. Blood calcium levels are increased by parathyroid hormone (PTH).",
              isCorrect: false,
            },
            {
              text: "Regulates sleep-wake cycles",
              explanation:
                "Incorrect. Sleep-wake cycles are regulated by melatonin.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Endocrine System",
          text: "What is the function of testosterone?",
          options: [
            {
              text: "Regulates sperm production and the development of male secondary sexual characteristics",
              explanation:
                "Correct. Testosterone plays a key role in male reproductive function and the development of traits such as facial hair and a deeper voice.",
              isCorrect: true,
            },
            {
              text: "Regulates the menstrual cycle",
              explanation:
                "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
              isCorrect: false,
            },
            {
              text: "Lowers blood glucose levels",
              explanation:
                "Incorrect. Blood glucose levels are regulated by insulin.",
              isCorrect: false,
            },
            {
              text: "Controls metabolism",
              explanation:
                "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Cardiovascular System",
      flashcards: [],
      questions: [
        {
          categoryName: "Cardiovascular System",
          text: "What are the main functions of the cardiovascular system?",
          options: [
            {
              text: "To transport oxygen, nutrients, hormones, and waste products throughout the body, and to help regulate body temperature and pH balance",
              explanation:
                "Correct. The cardiovascular system plays a crucial role in maintaining homeostasis by transporting essential substances and regulating various bodily functions.",
              isCorrect: true,
            },
            {
              text: "To digest food and absorb nutrients",
              explanation:
                "Incorrect. This is the function of the digestive system.",
              isCorrect: false,
            },
            {
              text: "To produce hormones and regulate metabolism",
              explanation:
                "Incorrect. This is the function of the endocrine system.",
              isCorrect: false,
            },
            {
              text: "To protect the body from pathogens",
              explanation:
                "Incorrect. This is the function of the immune system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What are the four chambers of the heart?",
          options: [
            {
              text: "Right atrium, right ventricle, left atrium, left ventricle",
              explanation:
                "Correct. The heart has four chambers: the right and left atria and the right and left ventricles.",
              isCorrect: true,
            },
            {
              text: "Aorta, pulmonary artery, right atrium, left atrium",
              explanation:
                "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
              isCorrect: false,
            },
            {
              text: "Superior vena cava, inferior vena cava, aorta, pulmonary artery",
              explanation:
                "Incorrect. These are major blood vessels, not heart chambers.",
              isCorrect: false,
            },
            {
              text: "Right ventricle, left ventricle, aorta, pulmonary artery",
              explanation:
                "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the right atrium?",
          options: [
            {
              text: "Receives deoxygenated blood from the body via the superior and inferior vena cava",
              explanation:
                "Correct. The right atrium receives deoxygenated blood from the body and passes it to the right ventricle.",
              isCorrect: true,
            },
            {
              text: "Pumps oxygenated blood to the body through the aorta",
              explanation:
                "Incorrect. This is the function of the left ventricle.",
              isCorrect: false,
            },
            {
              text: "Receives oxygenated blood from the lungs",
              explanation:
                "Incorrect. This is the function of the left atrium.",
              isCorrect: false,
            },
            {
              text: "Pumps deoxygenated blood to the lungs",
              explanation:
                "Incorrect. This is the function of the right ventricle.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the right ventricle?",
          options: [
            {
              text: "Pumps deoxygenated blood to the lungs through the pulmonary arteries",
              explanation:
                "Correct. The right ventricle pumps deoxygenated blood to the lungs where gas exchange occurs.",
              isCorrect: true,
            },
            {
              text: "Pumps oxygenated blood to the body through the aorta",
              explanation:
                "Incorrect. This is the function of the left ventricle.",
              isCorrect: false,
            },
            {
              text: "Receives deoxygenated blood from the body",
              explanation:
                "Incorrect. This is the function of the right atrium.",
              isCorrect: false,
            },
            {
              text: "Receives oxygenated blood from the lungs",
              explanation:
                "Incorrect. This is the function of the left atrium.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the left atrium?",
          options: [
            {
              text: "Receives oxygenated blood from the lungs via the pulmonary veins",
              explanation:
                "Correct. The left atrium receives oxygenated blood from the lungs and passes it to the left ventricle.",
              isCorrect: true,
            },
            {
              text: "Pumps oxygenated blood to the body through the aorta",
              explanation:
                "Incorrect. This is the function of the left ventricle.",
              isCorrect: false,
            },
            {
              text: "Receives deoxygenated blood from the body",
              explanation:
                "Incorrect. This is the function of the right atrium.",
              isCorrect: false,
            },
            {
              text: "Pumps deoxygenated blood to the lungs",
              explanation:
                "Incorrect. This is the function of the right ventricle.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the left ventricle?",
          options: [
            {
              text: "Pumps oxygenated blood to the body through the aorta",
              explanation:
                "Correct. The left ventricle pumps oxygenated blood to the body through the aorta, the largest artery.",
              isCorrect: true,
            },
            {
              text: "Receives deoxygenated blood from the body",
              explanation:
                "Incorrect. This is the function of the right atrium.",
              isCorrect: false,
            },
            {
              text: "Pumps deoxygenated blood to the lungs",
              explanation:
                "Incorrect. This is the function of the right ventricle.",
              isCorrect: false,
            },
            {
              text: "Receives oxygenated blood from the lungs",
              explanation:
                "Incorrect. This is the function of the left atrium.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What are the atrioventricular (AV) valves?",
          options: [
            {
              text: "The Tricuspid Valve (right side) and the Mitral/Bicuspid Valve (left side) between the atria and ventricles",
              explanation:
                "Correct. The AV valves prevent backflow of blood into the atria when the ventricles contract.",
              isCorrect: true,
            },
            {
              text: "The Pulmonary Valve and Aortic Valve",
              explanation: "Incorrect. These are the semilunar valves.",
              isCorrect: false,
            },
            {
              text: "The Superior and Inferior Vena Cava",
              explanation:
                "Incorrect. These are major veins that return deoxygenated blood to the heart.",
              isCorrect: false,
            },
            {
              text: "The Coronary Arteries and Veins",
              explanation:
                "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What are the semilunar valves?",
          options: [
            {
              text: "The Pulmonary Valve (between right ventricle and pulmonary artery) and the Aortic Valve (between left ventricle and aorta)",
              explanation:
                "Correct. The semilunar valves prevent backflow of blood into the ventricles after contraction.",
              isCorrect: true,
            },
            {
              text: "The Tricuspid Valve and Mitral Valve",
              explanation:
                "Incorrect. These are the atrioventricular (AV) valves.",
              isCorrect: false,
            },
            {
              text: "The Superior and Inferior Vena Cava",
              explanation:
                "Incorrect. These are major veins that return deoxygenated blood to the heart.",
              isCorrect: false,
            },
            {
              text: "The Coronary Arteries and Veins",
              explanation:
                "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the sinoatrial (SA) node?",
          options: [
            {
              text: "Acts as the pacemaker of the heart, initiating electrical impulses that cause the heart to beat",
              explanation:
                "Correct. The SA node sets the pace for the heartbeat.",
              isCorrect: true,
            },
            {
              text: "Controls the opening and closing of the heart valves",
              explanation:
                "Incorrect. The heart valves are controlled by pressure changes within the heart chambers.",
              isCorrect: false,
            },
            {
              text: "Coordinates the contraction of the ventricles",
              explanation:
                "Incorrect. The SA node initiates the heartbeat, but the AV node coordinates the contraction of the ventricles.",
              isCorrect: false,
            },
            {
              text: "Regulates blood pressure",
              explanation:
                "Incorrect. Blood pressure is regulated by various factors, including the autonomic nervous system and hormones.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the pathway of blood through the heart?",
          options: [
            {
              text: "Right atrium → right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta",
              explanation:
                "Correct. This pathway describes the flow of blood through the heart, from deoxygenated blood entering the right atrium to oxygenated blood being pumped out of the left ventricle.",
              isCorrect: true,
            },
            {
              text: "Left atrium → left ventricle → aorta → body → vena cava → right atrium",
              explanation:
                "Incorrect. This sequence skips the pulmonary circulation, which is necessary for oxygenating the blood.",
              isCorrect: false,
            },
            {
              text: "Right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta",
              explanation:
                "Incorrect. This sequence starts in the middle of the pathway, missing the right atrium.",
              isCorrect: false,
            },
            {
              text: "Left ventricle → aorta → body → right atrium → right ventricle → lungs",
              explanation:
                "Incorrect. This sequence incorrectly places the right atrium after the aorta.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the cardiac cycle?",
          options: [
            {
              text: "The sequence of events that occur when the heart beats, including diastole (relaxation) and systole (contraction)",
              explanation:
                "Correct. The cardiac cycle describes the process of the heart filling with blood (diastole) and then pumping it out (systole).",
              isCorrect: true,
            },
            {
              text: "The regulation of blood pressure",
              explanation:
                "Incorrect. While blood pressure is influenced by the cardiac cycle, the cardiac cycle specifically refers to the events within one heartbeat.",
              isCorrect: false,
            },
            {
              text: "The exchange of gases in the lungs",
              explanation:
                "Incorrect. Gas exchange occurs in the lungs, but the cardiac cycle refers to the heartbeat.",
              isCorrect: false,
            },
            {
              text: "The movement of blood through the veins",
              explanation:
                "Incorrect. The cardiac cycle primarily involves the heart, not the veins.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the role of the ECG (electrocardiogram)?",
          options: [
            {
              text: "Measures the electrical activity of the heart, showing the P wave, QRS complex, and T wave",
              explanation:
                "Correct. The ECG records the electrical signals that trigger heartbeats.",
              isCorrect: true,
            },
            {
              text: "Measures blood pressure",
              explanation:
                "Incorrect. Blood pressure is measured using a sphygmomanometer, not an ECG.",
              isCorrect: false,
            },
            {
              text: "Monitors oxygen levels in the blood",
              explanation:
                "Incorrect. Oxygen levels are typically measured with a pulse oximeter.",
              isCorrect: false,
            },
            {
              text: "Assesses lung function",
              explanation:
                "Incorrect. Lung function is assessed with spirometry or similar tests.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the arteries?",
          options: [
            {
              text: "Carry oxygenated blood away from the heart to the tissues of the body (except the pulmonary arteries)",
              explanation:
                "Correct. Arteries transport oxygen-rich blood from the heart to the body's tissues.",
              isCorrect: true,
            },
            {
              text: "Carry deoxygenated blood to the heart",
              explanation:
                "Incorrect. This is the function of veins, except for pulmonary veins.",
              isCorrect: false,
            },
            {
              text: "Exchange gases, nutrients, and waste with tissues",
              explanation: "Incorrect. This is the function of capillaries.",
              isCorrect: false,
            },
            {
              text: "Store blood at low pressure",
              explanation:
                "Incorrect. This is not a function of arteries, which operate under high pressure.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of the veins?",
          options: [
            {
              text: "Carry deoxygenated blood back to the heart (except the pulmonary veins)",
              explanation:
                "Correct. Veins return deoxygenated blood to the heart, with the exception of pulmonary veins, which carry oxygenated blood.",
              isCorrect: true,
            },
            {
              text: "Carry oxygenated blood away from the heart",
              explanation: "Incorrect. This is the function of arteries.",
              isCorrect: false,
            },
            {
              text: "Exchange gases, nutrients, and waste with tissues",
              explanation: "Incorrect. This is the function of capillaries.",
              isCorrect: false,
            },
            {
              text: "Pump blood to the lungs",
              explanation:
                "Incorrect. The right ventricle pumps blood to the lungs, not veins.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the function of capillaries?",
          options: [
            {
              text: "Serve as the site of gas, nutrient, and waste exchange between the blood and tissues",
              explanation:
                "Correct. Capillaries allow the exchange of substances between the blood and surrounding tissues.",
              isCorrect: true,
            },
            {
              text: "Carry oxygenated blood away from the heart",
              explanation: "Incorrect. This is the function of arteries.",
              isCorrect: false,
            },
            {
              text: "Carry deoxygenated blood to the heart",
              explanation: "Incorrect. This is the function of veins.",
              isCorrect: false,
            },
            {
              text: "Store blood at low pressure",
              explanation:
                "Incorrect. Capillaries do not store blood; they facilitate exchange.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is blood pressure?",
          options: [
            {
              text: "The force exerted by circulating blood on the walls of blood vessels, typically measured in systolic/diastolic values",
              explanation:
                "Correct. Blood pressure is the pressure of the blood within the arteries.",
              isCorrect: true,
            },
            {
              text: "The speed of blood flow through the arteries",
              explanation:
                "Incorrect. Blood pressure refers to the force exerted, not the speed of flow.",
              isCorrect: false,
            },
            {
              text: "The amount of blood pumped by the heart per minute",
              explanation:
                "Incorrect. This describes cardiac output, not blood pressure.",
              isCorrect: false,
            },
            {
              text: "The volume of blood in the body",
              explanation:
                "Incorrect. Blood pressure is independent of total blood volume.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What regulates blood pressure?",
          options: [
            {
              text: "The autonomic nervous system (baroreceptors), hormones (RAAS, ADH, ANP), and the kidneys",
              explanation:
                "Correct. These systems and organs play a key role in maintaining blood pressure.",
              isCorrect: true,
            },
            {
              text: "The liver and pancreas",
              explanation:
                "Incorrect. The liver and pancreas do not directly regulate blood pressure.",
              isCorrect: false,
            },
            {
              text: "The muscular system and bones",
              explanation:
                "Incorrect. Muscles and bones do not regulate blood pressure.",
              isCorrect: false,
            },
            {
              text: "The digestive system and endocrine system",
              explanation:
                "Incorrect. While the endocrine system is involved, the digestive system is not a primary regulator of blood pressure.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is the Renin-Angiotensin-Aldosterone System (RAAS)?",
          options: [
            {
              text: "A hormone system that regulates blood pressure and fluid balance, involving renin, angiotensin, and aldosterone",
              explanation:
                "Correct. RAAS plays a crucial role in blood pressure regulation and fluid balance.",
              isCorrect: true,
            },
            {
              text: "A system that regulates digestion and absorption of nutrients",
              explanation:
                "Incorrect. This is the function of the digestive system.",
              isCorrect: false,
            },
            {
              text: "A process that regulates body temperature",
              explanation:
                "Incorrect. Body temperature regulation is managed by different systems, including the hypothalamus and skin.",
              isCorrect: false,
            },
            {
              text: "A mechanism that controls muscle contraction",
              explanation:
                "Incorrect. Muscle contraction is regulated by the nervous system and calcium ions.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is hypertension?",
          options: [
            {
              text: "Chronically high blood pressure, which increases the risk of heart disease, stroke, and other complications",
              explanation:
                "Correct. Hypertension is a serious condition that can lead to various cardiovascular diseases.",
              isCorrect: true,
            },
            {
              text: "Low blood pressure that leads to fainting and dizziness",
              explanation:
                "Incorrect. This describes hypotension, not hypertension.",
              isCorrect: false,
            },
            {
              text: "A temporary increase in blood pressure due to stress",
              explanation:
                "Incorrect. Hypertension refers to chronically high blood pressure, not a temporary increase.",
              isCorrect: false,
            },
            {
              text: "A condition where the blood vessels are overly constricted",
              explanation:
                "Incorrect. While vessel constriction can contribute to hypertension, it is not the full definition of the condition.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is atherosclerosis?",
          options: [
            {
              text: "The buildup of plaque in the arteries, leading to reduced blood flow and an increased risk of heart attack",
              explanation:
                "Correct. Atherosclerosis is a major risk factor for heart attacks and strokes.",
              isCorrect: true,
            },
            {
              text: "The hardening of the heart muscles",
              explanation:
                "Incorrect. This condition is referred to as cardiomyopathy.",
              isCorrect: false,
            },
            {
              text: "The inflammation of the veins",
              explanation: "Incorrect. This condition is known as phlebitis.",
              isCorrect: false,
            },
            {
              text: "The enlargement of the arteries",
              explanation:
                "Incorrect. The enlargement of arteries is known as aneurysm, not atherosclerosis.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What is a myocardial infarction?",
          options: [
            {
              text: "Commonly known as a heart attack, it occurs when blood flow to a part of the heart is blocked, causing tissue damage",
              explanation:
                "Correct. A myocardial infarction is a serious condition that requires immediate medical attention.",
              isCorrect: true,
            },
            {
              text: "A condition where the heart beats too fast or too slow",
              explanation:
                "Incorrect. This condition is known as an arrhythmia, not a myocardial infarction.",
              isCorrect: false,
            },
            {
              text: "The weakening of the heart muscle",
              explanation:
                "Incorrect. This describes cardiomyopathy, not myocardial infarction.",
              isCorrect: false,
            },
            {
              text: "The inflammation of the heart lining",
              explanation: "Incorrect. This condition is called endocarditis.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Cardiovascular System",
          text: "What are arrhythmias?",
          options: [
            {
              text: "Abnormal heart rhythms that can disrupt normal cardiac function, ranging from benign to life-threatening",
              explanation:
                "Correct. Arrhythmias can cause serious complications if not managed properly.",
              isCorrect: true,
            },
            {
              text: "The inability of the heart to pump blood effectively",
              explanation:
                "Incorrect. This describes heart failure, not arrhythmias.",
              isCorrect: false,
            },
            {
              text: "A temporary drop in blood pressure",
              explanation: "Incorrect. This is hypotension, not arrhythmias.",
              isCorrect: false,
            },
            {
              text: "The buildup of fluid in the lungs",
              explanation:
                "Incorrect. This condition is known as pulmonary edema, not arrhythmias.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Lymphatic and Immune System",
      flashcards: [],
      questions: [
        {
          categoryName: "Lymphatic and Immune System",
          text: "What are the main functions of the lymphatic system?",
          options: [
            {
              text: "To return excess interstitial fluid to the bloodstream, absorb dietary fats, and provide immune responses",
              explanation:
                "Correct. The lymphatic system plays key roles in fluid balance, fat absorption, and immunity.",
              isCorrect: true,
            },
            {
              text: "To transport oxygen and nutrients throughout the body",
              explanation:
                "Incorrect. This is the function of the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "To digest and absorb nutrients from food",
              explanation:
                "Incorrect. This is the function of the digestive system.",
              isCorrect: false,
            },
            {
              text: "To produce hormones and regulate metabolism",
              explanation:
                "Incorrect. This is the function of the endocrine system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is lymph?",
          options: [
            {
              text: "A clear fluid similar to plasma that contains immune cells, proteins, and waste products",
              explanation:
                "Correct. Lymph is the fluid that circulates in the lymphatic system and plays a crucial role in immune function.",
              isCorrect: true,
            },
            {
              text: "A type of blood cell that fights infection",
              explanation:
                "Incorrect. Lymph is a fluid, not a cell; the cells involved in immunity are lymphocytes.",
              isCorrect: false,
            },
            {
              text: "A hormone that regulates immune responses",
              explanation: "Incorrect. Lymph is a fluid, not a hormone.",
              isCorrect: false,
            },
            {
              text: "A type of fat absorbed by the digestive system",
              explanation:
                "Incorrect. Lymph absorbs fats in the form of chyle, but it is not a type of fat itself.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What are the primary lymphoid organs?",
          options: [
            {
              text: "Thymus and bone marrow, where lymphocytes (T cells and B cells) mature",
              explanation:
                "Correct. The thymus and bone marrow are crucial for the development of immune cells.",
              isCorrect: true,
            },
            {
              text: "Spleen and lymph nodes",
              explanation:
                "Incorrect. While important for immune responses, the spleen and lymph nodes are secondary lymphoid organs.",
              isCorrect: false,
            },
            {
              text: "Heart and lungs",
              explanation:
                "Incorrect. These are part of the cardiovascular and respiratory systems, respectively.",
              isCorrect: false,
            },
            {
              text: "Kidneys and liver",
              explanation:
                "Incorrect. These organs are involved in excretion and metabolism, not immune function.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the role of lymph nodes?",
          options: [
            {
              text: "Filter lymph, trapping pathogens and foreign particles, and house lymphocytes that initiate immune responses",
              explanation:
                "Correct. Lymph nodes are essential in the immune system's ability to detect and fight infections.",
              isCorrect: true,
            },
            {
              text: "Produce red blood cells",
              explanation:
                "Incorrect. Red blood cells are produced in the bone marrow.",
              isCorrect: false,
            },
            {
              text: "Regulate blood pressure",
              explanation:
                "Incorrect. Blood pressure is regulated by the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Store and release hormones",
              explanation:
                "Incorrect. Hormone storage and release are functions of the endocrine system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the spleen?",
          options: [
            {
              text: "The largest lymphoid organ, which filters blood, recycles old red blood cells, and helps fight infection",
              explanation:
                "Correct. The spleen plays a significant role in both filtering blood and mounting immune responses.",
              isCorrect: true,
            },
            {
              text: "A gland that produces hormones",
              explanation:
                "Incorrect. The spleen is not a gland and does not produce hormones.",
              isCorrect: false,
            },
            {
              text: "An organ that stores fat",
              explanation:
                "Incorrect. The spleen does not store fat; this is a function of adipose tissue.",
              isCorrect: false,
            },
            {
              text: "A muscle that aids in breathing",
              explanation:
                "Incorrect. The diaphragm, not the spleen, is the muscle involved in breathing.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the function of the thymus?",
          options: [
            {
              text: "Site of T cell maturation, crucial for the adaptive immune response",
              explanation:
                "Correct. The thymus is essential for the development of T cells, which are critical to the adaptive immune system.",
              isCorrect: true,
            },
            {
              text: "Produces insulin and glucagon",
              explanation:
                "Incorrect. Insulin and glucagon are produced by the pancreas, not the thymus.",
              isCorrect: false,
            },
            {
              text: "Filters blood and lymph",
              explanation:
                "Incorrect. Filtering blood and lymph is the function of the spleen and lymph nodes.",
              isCorrect: false,
            },
            {
              text: "Stores bile",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not the thymus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What are B cells?",
          options: [
            {
              text: "Lymphocytes that produce antibodies, which neutralize or mark pathogens for destruction",
              explanation:
                "Correct. B cells are crucial to the body's humoral immune response.",
              isCorrect: true,
            },
            {
              text: "Cells that produce insulin",
              explanation:
                "Incorrect. Insulin is produced by beta cells in the pancreas, not B cells.",
              isCorrect: false,
            },
            {
              text: "Cells that directly attack infected cells",
              explanation:
                "Incorrect. T cells, specifically cytotoxic T cells, are responsible for directly attacking infected cells.",
              isCorrect: false,
            },
            {
              text: "Cells that carry oxygen",
              explanation:
                "Incorrect. Red blood cells, not B cells, carry oxygen in the blood.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What are T cells?",
          options: [
            {
              text: "Lymphocytes that directly attack infected cells or regulate other immune responses",
              explanation:
                "Correct. T cells play a central role in the cell-mediated immune response.",
              isCorrect: true,
            },
            {
              text: "Cells that produce antibodies",
              explanation:
                "Incorrect. Antibodies are produced by B cells, not T cells.",
              isCorrect: false,
            },
            {
              text: "Cells that carry oxygen",
              explanation:
                "Incorrect. Red blood cells carry oxygen, not T cells.",
              isCorrect: false,
            },
            {
              text: "Cells that produce insulin",
              explanation:
                "Incorrect. Insulin is produced by beta cells in the pancreas, not T cells.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the difference between innate and adaptive immunity?",
          options: [
            {
              text: "Innate immunity is the body's first line of defense against pathogens (non-specific), while adaptive immunity targets specific invaders and has memory",
              explanation:
                "Correct. Innate immunity provides immediate, non-specific defense, while adaptive immunity is specific and has a memory component.",
              isCorrect: true,
            },
            {
              text: "Innate immunity produces antibodies, while adaptive immunity does not",
              explanation:
                "Incorrect. Antibody production is a feature of adaptive immunity, not innate immunity.",
              isCorrect: false,
            },
            {
              text: "Adaptive immunity is always present, while innate immunity develops after exposure to antigens",
              explanation:
                "Incorrect. Innate immunity is always present and immediate, while adaptive immunity develops after exposure to specific antigens.",
              isCorrect: false,
            },
            {
              text: "Innate immunity is only found in humans, while adaptive immunity is present in all animals",
              explanation:
                "Incorrect. Both innate and adaptive immunity are present in many animals, not just humans.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is inflammation?",
          options: [
            {
              text: "A localized immune response to injury or infection, characterized by redness, heat, swelling, and pain",
              explanation:
                "Correct. Inflammation is a key part of the immune system's response to damage or pathogens.",
              isCorrect: true,
            },
            {
              text: "A process of cell division",
              explanation:
                "Incorrect. Cell division is a separate process, not related to inflammation.",
              isCorrect: false,
            },
            {
              text: "The process of oxygen exchange in the lungs",
              explanation:
                "Incorrect. Oxygen exchange occurs in the lungs, not through inflammation.",
              isCorrect: false,
            },
            {
              text: "A type of muscle contraction",
              explanation:
                "Incorrect. Muscle contraction is not related to inflammation.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the function of antibodies?",
          options: [
            {
              text: "Proteins produced by B cells that bind to specific antigens on pathogens, marking them for destruction",
              explanation:
                "Correct. Antibodies are crucial in identifying and neutralizing foreign invaders.",
              isCorrect: true,
            },
            {
              text: "Cells that directly kill infected cells",
              explanation:
                "Incorrect. Cytotoxic T cells, not antibodies, directly kill infected cells.",
              isCorrect: false,
            },
            {
              text: "Molecules that carry oxygen in the blood",
              explanation:
                "Incorrect. Hemoglobin in red blood cells carries oxygen, not antibodies.",
              isCorrect: false,
            },
            {
              text: "Proteins that break down food in the stomach",
              explanation:
                "Incorrect. Enzymes like pepsin break down food, not antibodies.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the complement system?",
          options: [
            {
              text: "A group of proteins that enhance the immune response by promoting inflammation, opsonization, and lysis of pathogens",
              explanation:
                "Correct. The complement system amplifies the body's ability to fight infections.",
              isCorrect: true,
            },
            {
              text: "A system that transports oxygen in the blood",
              explanation:
                "Incorrect. Oxygen transport is carried out by red blood cells, not the complement system.",
              isCorrect: false,
            },
            {
              text: "A group of hormones that regulate metabolism",
              explanation:
                "Incorrect. The complement system is involved in immunity, not metabolism.",
              isCorrect: false,
            },
            {
              text: "A network of neurons that control muscle movement",
              explanation:
                "Incorrect. The complement system is part of the immune system, not the nervous system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is an autoimmune disease?",
          options: [
            {
              text: "A condition where the immune system mistakenly attacks the body's own tissues (e.g., rheumatoid arthritis, lupus)",
              explanation:
                "Correct. Autoimmune diseases result from the immune system failing to recognize the body’s own cells and tissues.",
              isCorrect: true,
            },
            {
              text: "A condition where the body cannot produce enough antibodies",
              explanation:
                "Incorrect. This describes an immunodeficiency, not an autoimmune disease.",
              isCorrect: false,
            },
            {
              text: "A disease caused by external pathogens like bacteria or viruses",
              explanation:
                "Incorrect. Autoimmune diseases are caused by an internal immune system malfunction, not by external pathogens.",
              isCorrect: false,
            },
            {
              text: "A type of cancer that affects the immune system",
              explanation:
                "Incorrect. While cancers like lymphoma affect the immune system, they are not classified as autoimmune diseases.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is the difference between active and passive immunity?",
          options: [
            {
              text: "Active immunity involves the body's own production of antibodies (e.g., after infection or vaccination), while passive immunity is provided by antibodies from another source (e.g., mother to baby, antibody injections)",
              explanation:
                "Correct. Active immunity is long-lasting, whereas passive immunity is temporary.",
              isCorrect: true,
            },
            {
              text: "Active immunity is only temporary, while passive immunity is long-lasting",
              explanation:
                "Incorrect. Passive immunity is temporary because it involves antibodies not produced by the individual.",
              isCorrect: false,
            },
            {
              text: "Passive immunity is acquired only through vaccination, while active immunity is acquired through natural infection",
              explanation:
                "Incorrect. Vaccination typically provides active immunity, not passive.",
              isCorrect: false,
            },
            {
              text: "Active immunity can only be acquired from the mother during pregnancy",
              explanation:
                "Incorrect. Active immunity can be acquired through infection or vaccination, not just through maternal antibodies.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Lymphatic and Immune System",
          text: "What is lymphedema?",
          options: [
            {
              text: "Swelling due to blockage or damage to lymphatic vessels, preventing normal lymph drainage",
              explanation:
                "Correct. Lymphedema occurs when lymphatic fluid accumulates in tissues, causing swelling.",
              isCorrect: true,
            },
            {
              text: "An infection of the lymph nodes",
              explanation:
                "Incorrect. An infection of the lymph nodes is called lymphadenitis, not lymphedema.",
              isCorrect: false,
            },
            {
              text: "A condition where the immune system attacks the lymphatic vessels",
              explanation:
                "Incorrect. While autoimmune diseases can affect the lymphatic system, lymphedema is specifically related to fluid accumulation due to blockage or damage.",
              isCorrect: false,
            },
            {
              text: "A disease that affects the production of lymphocytes",
              explanation:
                "Incorrect. Lymphedema affects the lymphatic drainage, not the production of lymphocytes.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Respiratory System",
      flashcards: [],
      questions: [
        {
          categoryName: "Respiratory System",
          text: "What are the primary functions of the respiratory system?",
          options: [
            {
              text: "To exchange gases (oxygen and carbon dioxide) between the air and the blood, and to help regulate blood pH",
              explanation:
                "Correct. The respiratory system is crucial for gas exchange and maintaining the acid-base balance in the body.",
              isCorrect: true,
            },
            {
              text: "To digest and absorb nutrients",
              explanation:
                "Incorrect. Digestion and absorption are functions of the digestive system.",
              isCorrect: false,
            },
            {
              text: "To filter blood and produce urine",
              explanation:
                "Incorrect. These functions are carried out by the urinary system.",
              isCorrect: false,
            },
            {
              text: "To transport oxygen and nutrients throughout the body",
              explanation:
                "Incorrect. Transporting oxygen and nutrients is the function of the cardiovascular system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the pathway of air through the respiratory system?",
          options: [
            {
              text: "Nose/mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli",
              explanation:
                "Correct. This is the correct pathway that air follows through the respiratory system.",
              isCorrect: true,
            },
            {
              text: "Mouth → esophagus → stomach → intestines",
              explanation:
                "Incorrect. This is the pathway of food through the digestive system.",
              isCorrect: false,
            },
            {
              text: "Nose → esophagus → trachea → bronchi",
              explanation:
                "Incorrect. The esophagus is not involved in the respiratory system; it is part of the digestive system.",
              isCorrect: false,
            },
            {
              text: "Mouth → larynx → esophagus → alveoli",
              explanation:
                "Incorrect. The esophagus is part of the digestive system and does not connect to the alveoli.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the function of the nasal cavity?",
          options: [
            {
              text: "Filters, warms, and moistens air as it enters the respiratory system",
              explanation:
                "Correct. The nasal cavity prepares the air before it enters the lower respiratory tract.",
              isCorrect: true,
            },
            {
              text: "Produces digestive enzymes",
              explanation:
                "Incorrect. Digestive enzymes are produced by the digestive system, not the respiratory system.",
              isCorrect: false,
            },
            {
              text: "Pumps blood throughout the body",
              explanation:
                "Incorrect. Pumping blood is the function of the heart in the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Absorbs oxygen directly into the bloodstream",
              explanation:
                "Incorrect. Oxygen is absorbed into the bloodstream in the alveoli of the lungs, not the nasal cavity.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the role of the larynx?",
          options: [
            {
              text: "Contains the vocal cords and routes air and food into the proper channels",
              explanation:
                "Correct. The larynx is involved in voice production and directs air to the trachea and food to the esophagus.",
              isCorrect: true,
            },
            {
              text: "Pumps air into the lungs",
              explanation:
                "Incorrect. The diaphragm and respiratory muscles pump air into the lungs.",
              isCorrect: false,
            },
            {
              text: "Filters dust and particles from the air",
              explanation:
                "Incorrect. The nasal cavity and upper respiratory tract primarily filter dust and particles.",
              isCorrect: false,
            },
            {
              text: "Regulates the pH of the blood",
              explanation:
                "Incorrect. Blood pH is regulated by the respiratory system and kidneys, not specifically by the larynx.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the function of the trachea?",
          options: [
            {
              text: "The windpipe that conducts air from the larynx to the bronchi, reinforced by C-shaped cartilage rings",
              explanation:
                "Correct. The trachea is the main airway leading from the larynx to the bronchi.",
              isCorrect: true,
            },
            {
              text: "A tube that carries food to the stomach",
              explanation:
                "Incorrect. The esophagus carries food to the stomach.",
              isCorrect: false,
            },
            {
              text: "A muscle that assists in breathing",
              explanation:
                "Incorrect. The diaphragm is the primary muscle that assists in breathing.",
              isCorrect: false,
            },
            {
              text: "A passage that allows air to enter the mouth",
              explanation:
                "Incorrect. The trachea is not directly involved in air entering the mouth.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What are the bronchi and bronchioles?",
          options: [
            {
              text: "The bronchi are large airways that branch from the trachea into each lung, and bronchioles are smaller branches that lead to the alveoli",
              explanation:
                "Correct. The bronchi and bronchioles are part of the airway system that conducts air to the alveoli where gas exchange occurs.",
              isCorrect: true,
            },
            {
              text: "The main sites of gas exchange in the lungs",
              explanation:
                "Incorrect. Gas exchange occurs in the alveoli, not the bronchi or bronchioles.",
              isCorrect: false,
            },
            {
              text: "Muscles that assist in breathing",
              explanation:
                "Incorrect. The bronchi and bronchioles are airways, not muscles.",
              isCorrect: false,
            },
            {
              text: "Valves that regulate airflow into the lungs",
              explanation:
                "Incorrect. The bronchi and bronchioles are not valves; they are airways.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What are the alveoli?",
          options: [
            {
              text: "Tiny air sacs in the lungs where gas exchange occurs between the air and the blood",
              explanation:
                "Correct. The alveoli are the primary site of gas exchange in the lungs.",
              isCorrect: true,
            },
            {
              text: "Large airways that conduct air to the lungs",
              explanation:
                "Incorrect. The bronchi and bronchioles are large airways; alveoli are small air sacs.",
              isCorrect: false,
            },
            {
              text: "Muscles that move the lungs during breathing",
              explanation: "Incorrect. Alveoli are air sacs, not muscles.",
              isCorrect: false,
            },
            {
              text: "Valves that prevent air from escaping the lungs",
              explanation:
                "Incorrect. Alveoli are not valves; they are the sites of gas exchange.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the process of gas exchange in the alveoli?",
          options: [
            {
              text: "Oxygen diffuses from the alveoli into the pulmonary capillaries, while carbon dioxide diffuses from the blood into the alveoli to be exhaled",
              explanation:
                "Correct. This is the fundamental process of gas exchange in the lungs.",
              isCorrect: true,
            },
            {
              text: "Air is pumped from the alveoli into the bloodstream",
              explanation:
                "Incorrect. Air is not pumped; gases diffuse based on concentration gradients.",
              isCorrect: false,
            },
            {
              text: "Nutrients are absorbed from the air into the blood",
              explanation:
                "Incorrect. Nutrients are absorbed in the digestive system, not the respiratory system.",
              isCorrect: false,
            },
            {
              text: "Carbon dioxide is absorbed from the alveoli into the bloodstream",
              explanation:
                "Incorrect. Carbon dioxide is removed from the bloodstream and exhaled through the alveoli.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What muscles are involved in inspiration?",
          options: [
            {
              text: "The diaphragm and external intercostal muscles contract, expanding the thoracic cavity and drawing air into the lungs",
              explanation:
                "Correct. These muscles are responsible for creating the negative pressure needed for inhalation.",
              isCorrect: true,
            },
            {
              text: "The abdominal muscles contract to force air into the lungs",
              explanation:
                "Incorrect. The abdominal muscles are involved in forced exhalation, not inspiration.",
              isCorrect: false,
            },
            {
              text: "The heart pumps air into the lungs",
              explanation: "Incorrect. The heart pumps blood, not air.",
              isCorrect: false,
            },
            {
              text: "The trachea contracts to draw air into the lungs",
              explanation:
                "Incorrect. The trachea is a rigid structure that does not contract to draw air.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the role of the diaphragm in breathing?",
          options: [
            {
              text: "A dome-shaped muscle that contracts to increase the volume of the thoracic cavity during inspiration",
              explanation:
                "Correct. The diaphragm is the primary muscle responsible for the inhalation process.",
              isCorrect: true,
            },
            {
              text: "A muscle that pumps blood to the lungs",
              explanation:
                "Incorrect. The heart is responsible for pumping blood, not the diaphragm.",
              isCorrect: false,
            },
            {
              text: "A structure that filters air entering the lungs",
              explanation:
                "Incorrect. The nasal cavity and respiratory tract filter air, not the diaphragm.",
              isCorrect: false,
            },
            {
              text: "A valve that controls airflow into the lungs",
              explanation: "Incorrect. The diaphragm is a muscle, not a valve.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "How is oxygen transported in the blood?",
          options: [
            {
              text: "Primarily bound to hemoglobin in red blood cells as oxyhemoglobin",
              explanation:
                "Correct. Most oxygen in the blood is carried by hemoglobin in red blood cells.",
              isCorrect: true,
            },
            {
              text: "Dissolved directly in the plasma",
              explanation:
                "Incorrect. Only a small amount of oxygen is dissolved in plasma.",
              isCorrect: false,
            },
            {
              text: "Bound to white blood cells",
              explanation:
                "Incorrect. Oxygen is carried by red blood cells, not white blood cells.",
              isCorrect: false,
            },
            {
              text: "Transported as carbon dioxide",
              explanation:
                "Incorrect. Oxygen and carbon dioxide are different gases with different transport mechanisms.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "How is carbon dioxide transported in the blood?",
          options: [
            {
              text: "Dissolved in plasma, bound to hemoglobin as carbaminohemoglobin, or converted to bicarbonate ions in the plasma",
              explanation:
                "Correct. These are the three main ways carbon dioxide is transported in the blood.",
              isCorrect: true,
            },
            {
              text: "Bound to oxygen molecules",
              explanation:
                "Incorrect. Oxygen and carbon dioxide are transported separately in the blood.",
              isCorrect: false,
            },
            {
              text: "Only dissolved in plasma",
              explanation:
                "Incorrect. While some CO2 is dissolved in plasma, it is also transported bound to hemoglobin and as bicarbonate ions.",
              isCorrect: false,
            },
            {
              text: "Primarily carried by red blood cells",
              explanation:
                "Incorrect. CO2 is carried both in plasma and by hemoglobin, but not in the same manner as oxygen.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is the role of the medulla oblongata in respiration?",
          options: [
            {
              text: "It controls the basic rhythm of breathing by sending signals to the respiratory muscles",
              explanation:
                "Correct. The medulla oblongata is responsible for regulating the rate and rhythm of breathing.",
              isCorrect: true,
            },
            {
              text: "It filters air before it enters the lungs",
              explanation:
                "Incorrect. The nasal cavity and upper respiratory tract are responsible for filtering air.",
              isCorrect: false,
            },
            {
              text: "It exchanges gases in the alveoli",
              explanation:
                "Incorrect. Gas exchange occurs in the alveoli, not the medulla oblongata.",
              isCorrect: false,
            },
            {
              text: "It increases blood oxygen levels directly",
              explanation:
                "Incorrect. The medulla oblongata regulates breathing, which indirectly affects blood oxygen levels.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What are chemoreceptors and how do they regulate breathing?",
          options: [
            {
              text: "Sensory receptors that detect changes in blood pH, CO2, and O2 levels, and adjust ventilation to maintain homeostasis",
              explanation:
                "Correct. Chemoreceptors help regulate breathing by monitoring blood chemistry.",
              isCorrect: true,
            },
            {
              text: "Cells in the alveoli that filter air",
              explanation:
                "Incorrect. Alveoli are involved in gas exchange, not in detecting blood chemistry.",
              isCorrect: false,
            },
            {
              text: "Nerves that control muscle contraction during breathing",
              explanation:
                "Incorrect. Nerves control muscle contraction, but chemoreceptors are specifically involved in detecting chemical changes in the blood.",
              isCorrect: false,
            },
            {
              text: "Glands that secrete hormones to regulate breathing",
              explanation:
                "Incorrect. Chemoreceptors are not glands; they are sensory receptors.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is asthma?",
          options: [
            {
              text: "A chronic inflammatory disease of the airways characterized by episodes of wheezing, breathlessness, and coughing",
              explanation:
                "Correct. Asthma is a common respiratory condition affecting the airways.",
              isCorrect: true,
            },
            {
              text: "A bacterial infection of the lungs",
              explanation:
                "Incorrect. Bacterial infections, such as pneumonia, are different from asthma.",
              isCorrect: false,
            },
            {
              text: "A condition where air sacs in the lungs are destroyed",
              explanation: "Incorrect. This describes emphysema, not asthma.",
              isCorrect: false,
            },
            {
              text: "A blockage of a pulmonary artery",
              explanation:
                "Incorrect. A pulmonary embolism involves a blockage, not asthma.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is Chronic Obstructive Pulmonary Disease (COPD)?",
          options: [
            {
              text: "A group of lung diseases, including emphysema and chronic bronchitis, that cause airflow obstruction and breathing difficulties",
              explanation:
                "Correct. COPD is a term that includes multiple chronic respiratory conditions.",
              isCorrect: true,
            },
            {
              text: "A sudden blockage in the lungs",
              explanation:
                "Incorrect. A sudden blockage is typically a pulmonary embolism, not COPD.",
              isCorrect: false,
            },
            {
              text: "A condition caused by bacterial infection",
              explanation:
                "Incorrect. While infections can exacerbate COPD, the condition itself is chronic and not caused by bacteria.",
              isCorrect: false,
            },
            {
              text: "An allergic reaction that narrows the airways",
              explanation: "Incorrect. This describes asthma more than COPD.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is pneumonia?",
          options: [
            {
              text: "An infection of the lungs that inflames the air sacs, leading to fluid accumulation and impaired gas exchange",
              explanation:
                "Correct. Pneumonia is a serious lung infection that affects breathing.",
              isCorrect: true,
            },
            {
              text: "A chronic disease that narrows the airways",
              explanation:
                "Incorrect. Chronic diseases like asthma and COPD narrow the airways, but pneumonia is an infection.",
              isCorrect: false,
            },
            {
              text: "A condition where the lungs lose elasticity",
              explanation:
                "Incorrect. Loss of elasticity is more characteristic of emphysema.",
              isCorrect: false,
            },
            {
              text: "A disorder that affects the diaphragm",
              explanation:
                "Incorrect. Pneumonia primarily affects the lungs, not the diaphragm.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Respiratory System",
          text: "What is a pulmonary embolism?",
          options: [
            {
              text: "A blockage in one of the pulmonary arteries in the lungs, usually caused by a blood clot, leading to decreased oxygenation of blood",
              explanation:
                "Correct. A pulmonary embolism is a serious condition that affects blood flow in the lungs.",
              isCorrect: true,
            },
            {
              text: "A chronic inflammation of the bronchi",
              explanation:
                "Incorrect. Chronic inflammation of the bronchi is more typical of bronchitis.",
              isCorrect: false,
            },
            {
              text: "A condition that causes the airways to spasm",
              explanation:
                "Incorrect. Airway spasms are associated with asthma.",
              isCorrect: false,
            },
            {
              text: "A lung infection that causes fluid buildup",
              explanation:
                "Incorrect. Fluid buildup in the lungs is more typical of pneumonia, not a pulmonary embolism.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Digestive System",
      flashcards: [],
      questions: [
        {
          categoryName: "Digestive System",
          text: "What is the main function of the digestive system?",
          options: [
            {
              text: "To break down food into nutrients that can be absorbed into the bloodstream and eliminate waste",
              explanation:
                "Correct. The digestive system processes food into absorbable nutrients and disposes of waste.",
              isCorrect: true,
            },
            {
              text: "To circulate blood throughout the body",
              explanation:
                "Incorrect. Circulation is the function of the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "To regulate hormones in the body",
              explanation:
                "Incorrect. Hormone regulation is managed by the endocrine system.",
              isCorrect: false,
            },
            {
              text: "To filter waste from the blood",
              explanation:
                "Incorrect. Filtering waste from the blood is the function of the kidneys in the urinary system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What are the primary processes of digestion?",
          options: [
            {
              text: "Ingestion, mechanical digestion, chemical digestion, absorption, and defecation",
              explanation:
                "Correct. These are the key processes involved in the digestive system's function.",
              isCorrect: true,
            },
            {
              text: "Breathing, circulation, excretion, and reproduction",
              explanation:
                "Incorrect. These processes are related to different systems such as respiratory, cardiovascular, and reproductive systems.",
              isCorrect: false,
            },
            {
              text: "Filtration, reabsorption, secretion, and excretion",
              explanation:
                "Incorrect. These processes are part of the urinary system.",
              isCorrect: false,
            },
            {
              text: "Metabolism, detoxification, hormone production, and immune response",
              explanation:
                "Incorrect. These processes involve multiple systems including the endocrine and immune systems.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the mouth in digestion?",
          options: [
            {
              text: "Begins mechanical digestion through chewing (mastication) and chemical digestion with saliva containing amylase",
              explanation:
                "Correct. The mouth is the starting point for both mechanical and chemical digestion.",
              isCorrect: true,
            },
            {
              text: "Stores bile for fat digestion",
              explanation:
                "Incorrect. The gallbladder stores bile, not the mouth.",
              isCorrect: false,
            },
            {
              text: "Filters toxins from the blood",
              explanation:
                "Incorrect. Filtering toxins is the function of the liver and kidneys.",
              isCorrect: false,
            },
            {
              text: "Produces insulin for blood sugar regulation",
              explanation:
                "Incorrect. Insulin is produced by the pancreas, not the mouth.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the function of the salivary glands?",
          options: [
            {
              text: "Produce saliva, which contains enzymes (amylase) that begin the breakdown of carbohydrates",
              explanation:
                "Correct. Salivary glands initiate carbohydrate digestion in the mouth.",
              isCorrect: true,
            },
            {
              text: "Secrete hormones that regulate metabolism",
              explanation:
                "Incorrect. Metabolic regulation is a function of the endocrine system, not the salivary glands.",
              isCorrect: false,
            },
            {
              text: "Absorb nutrients from digested food",
              explanation:
                "Incorrect. Nutrient absorption occurs in the small intestine.",
              isCorrect: false,
            },
            {
              text: "Store and release bile for fat digestion",
              explanation:
                "Incorrect. The gallbladder stores and releases bile, not the salivary glands.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the esophagus?",
          options: [
            {
              text: "A muscular tube that transports food from the pharynx to the stomach via peristalsis",
              explanation:
                "Correct. The esophagus uses peristalsis to move food to the stomach.",
              isCorrect: true,
            },
            {
              text: "The organ where most nutrient absorption occurs",
              explanation:
                "Incorrect. Most nutrient absorption takes place in the small intestine, not the esophagus.",
              isCorrect: false,
            },
            {
              text: "A valve that prevents stomach acid from entering the esophagus",
              explanation:
                "Incorrect. The lower esophageal sphincter performs this function, but it is not the esophagus itself.",
              isCorrect: false,
            },
            {
              text: "The tube through which air passes from the larynx to the bronchi",
              explanation:
                "Incorrect. This describes the trachea, not the esophagus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is peristalsis?",
          options: [
            {
              text: "Involuntary, wave-like muscle contractions that move food through the digestive tract",
              explanation:
                "Correct. Peristalsis is crucial for moving food along the digestive tract.",
              isCorrect: true,
            },
            {
              text: "The process of chewing and breaking down food",
              explanation:
                "Incorrect. This describes mastication, not peristalsis.",
              isCorrect: false,
            },
            {
              text: "The absorption of nutrients into the bloodstream",
              explanation:
                "Incorrect. Absorption occurs in the intestines, not through peristalsis.",
              isCorrect: false,
            },
            {
              text: "The release of enzymes to digest food",
              explanation:
                "Incorrect. Enzyme release is part of chemical digestion, not peristalsis.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the stomach in digestion?",
          options: [
            {
              text: "Secretes gastric juices, including HCl and pepsin, to chemically break down proteins and churns food to mix it with digestive enzymes",
              explanation:
                "Correct. The stomach is key for protein digestion and food processing.",
              isCorrect: true,
            },
            {
              text: "Absorbs most of the nutrients from digested food",
              explanation:
                "Incorrect. Most nutrient absorption occurs in the small intestine.",
              isCorrect: false,
            },
            {
              text: "Produces bile for fat digestion",
              explanation:
                "Incorrect. Bile is produced by the liver, not the stomach.",
              isCorrect: false,
            },
            {
              text: "Stores and concentrates digestive enzymes",
              explanation:
                "Incorrect. Digestive enzymes are produced in various organs, but they are not concentrated in the stomach.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is chyme?",
          options: [
            {
              text: "The semi-liquid mixture of partially digested food and gastric juices that forms in the stomach and moves into the small intestine",
              explanation:
                "Correct. Chyme is the product of stomach digestion ready for further processing in the intestines.",
              isCorrect: true,
            },
            {
              text: "The fluid secreted by the salivary glands",
              explanation:
                "Incorrect. Saliva, not chyme, is secreted by the salivary glands.",
              isCorrect: false,
            },
            {
              text: "The solid waste material excreted by the colon",
              explanation:
                "Incorrect. Solid waste is referred to as feces, not chyme.",
              isCorrect: false,
            },
            {
              text: "The bile stored in the gallbladder",
              explanation:
                "Incorrect. Bile is a digestive fluid, but it is not chyme.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the small intestine and its function?",
          options: [
            {
              text: "The primary site of nutrient absorption; consists of three sections: duodenum, jejunum, and ileum",
              explanation:
                "Correct. The small intestine is critical for absorbing nutrients into the bloodstream.",
              isCorrect: true,
            },
            {
              text: "The first part of the digestive system where food is ingested",
              explanation:
                "Incorrect. The mouth is where ingestion occurs, not the small intestine.",
              isCorrect: false,
            },
            {
              text: "The organ that stores and concentrates bile",
              explanation:
                "Incorrect. The gallbladder stores and concentrates bile, not the small intestine.",
              isCorrect: false,
            },
            {
              text: "The tube that transports food from the stomach to the rectum",
              explanation:
                "Incorrect. The small intestine connects the stomach to the large intestine, not the rectum.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the duodenum?",
          options: [
            {
              text: "The first part of the small intestine where most chemical digestion occurs, receiving bile from the liver and pancreatic enzymes",
              explanation:
                "Correct. The duodenum is where chemical digestion intensifies with the help of bile and enzymes.",
              isCorrect: true,
            },
            {
              text: "The part of the large intestine where water is absorbed",
              explanation:
                "Incorrect. Water absorption occurs in the colon, not the duodenum.",
              isCorrect: false,
            },
            {
              text: "The tube that connects the mouth to the stomach",
              explanation:
                "Incorrect. This describes the esophagus, not the duodenum.",
              isCorrect: false,
            },
            {
              text: "The final part of the digestive system where feces are stored",
              explanation:
                "Incorrect. Feces are stored in the rectum, not the duodenum.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the function of the villi and microvilli in the small intestine?",
          options: [
            {
              text: "Increase the surface area for absorption of nutrients into the bloodstream",
              explanation:
                "Correct. Villi and microvilli are essential for maximizing nutrient absorption.",
              isCorrect: true,
            },
            {
              text: "Produce digestive enzymes that break down carbohydrates",
              explanation:
                "Incorrect. While they aid absorption, villi and microvilli do not produce enzymes.",
              isCorrect: false,
            },
            {
              text: "Store bile produced by the liver",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not in the villi or microvilli.",
              isCorrect: false,
            },
            {
              text: "Filter toxins from the blood",
              explanation:
                "Incorrect. The liver and kidneys are responsible for filtering toxins, not the villi and microvilli.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the liver in digestion?",
          options: [
            {
              text: "Produces bile, which emulsifies fats to aid in their digestion",
              explanation:
                "Correct. The liver's bile production is crucial for fat digestion.",
              isCorrect: true,
            },
            {
              text: "Stores glucose as glycogen for energy",
              explanation:
                "Incorrect. While the liver does store glycogen, this function is related to metabolism, not digestion.",
              isCorrect: false,
            },
            {
              text: "Absorbs water and electrolytes from digested food",
              explanation:
                "Incorrect. Water and electrolyte absorption primarily occurs in the large intestine.",
              isCorrect: false,
            },
            {
              text: "Breaks down proteins into amino acids",
              explanation:
                "Incorrect. Protein digestion begins in the stomach and continues in the small intestine.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the function of the gallbladder?",
          options: [
            {
              text: "Stores and concentrates bile, releasing it into the duodenum when needed for fat digestion",
              explanation:
                "Correct. The gallbladder plays a key role in the digestion of fats by storing and releasing bile.",
              isCorrect: true,
            },
            {
              text: "Produces digestive enzymes",
              explanation:
                "Incorrect. Digestive enzymes are produced by the pancreas and stomach, not the gallbladder.",
              isCorrect: false,
            },
            {
              text: "Absorbs nutrients from digested food",
              explanation:
                "Incorrect. Nutrient absorption occurs in the small intestine, not the gallbladder.",
              isCorrect: false,
            },
            {
              text: "Filters toxins from the blood",
              explanation:
                "Incorrect. The liver is responsible for filtering toxins, not the gallbladder.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What are the exocrine functions of the pancreas?",
          options: [
            {
              text: "Produces digestive enzymes (amylase, lipase, proteases) and bicarbonate to neutralize stomach acid in the duodenum",
              explanation:
                "Correct. The pancreas is vital for producing enzymes and bicarbonate to aid digestion.",
              isCorrect: true,
            },
            {
              text: "Produces insulin to regulate blood sugar levels",
              explanation:
                "Incorrect. Insulin production is an endocrine function of the pancreas.",
              isCorrect: false,
            },
            {
              text: "Stores and releases bile",
              explanation:
                "Incorrect. The gallbladder, not the pancreas, stores and releases bile.",
              isCorrect: false,
            },
            {
              text: "Filters waste from the blood",
              explanation:
                "Incorrect. Waste filtration is performed by the kidneys, not the pancreas.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the large intestine?",
          options: [
            {
              text: "Absorbs water and electrolytes, forming solid feces, and houses gut bacteria that produce vitamins like vitamin K",
              explanation:
                "Correct. The large intestine is key for water absorption, feces formation, and housing beneficial bacteria.",
              isCorrect: true,
            },
            {
              text: "Breaks down proteins into amino acids",
              explanation:
                "Incorrect. Protein digestion occurs in the stomach and small intestine, not the large intestine.",
              isCorrect: false,
            },
            {
              text: "Stores bile produced by the liver",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not the large intestine.",
              isCorrect: false,
            },
            {
              text: "Filters toxins from the blood",
              explanation:
                "Incorrect. Toxin filtration is performed by the liver and kidneys, not the large intestine.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the function of the rectum and anus?",
          options: [
            {
              text: "Store and expel feces during defecation",
              explanation:
                "Correct. The rectum stores feces, and the anus controls their expulsion during defecation.",
              isCorrect: true,
            },
            {
              text: "Absorb nutrients from digested food",
              explanation:
                "Incorrect. Nutrient absorption occurs in the small intestine, not the rectum and anus.",
              isCorrect: false,
            },
            {
              text: "Filter waste from the blood",
              explanation:
                "Incorrect. Waste filtration is performed by the kidneys, not the rectum and anus.",
              isCorrect: false,
            },
            {
              text: "Produce bile for fat digestion",
              explanation:
                "Incorrect. Bile is produced by the liver, not the rectum and anus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What enzymes are involved in protein digestion?",
          options: [
            {
              text: "Pepsin (stomach), trypsin, and chymotrypsin (pancreas)",
              explanation:
                "Correct. These enzymes are essential for breaking down proteins into amino acids.",
              isCorrect: true,
            },
            {
              text: "Amylase (saliva), lipase, and maltase",
              explanation:
                "Incorrect. Amylase breaks down carbohydrates, and lipase digests fats, not proteins.",
              isCorrect: false,
            },
            {
              text: "Lactase, sucrase, and maltase",
              explanation:
                "Incorrect. These enzymes break down carbohydrates, not proteins.",
              isCorrect: false,
            },
            {
              text: "Insulin, glucagon, and somatostatin",
              explanation:
                "Incorrect. These are hormones related to blood sugar regulation, not digestive enzymes.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of bile in fat digestion?",
          options: [
            {
              text: "Bile emulsifies fats, breaking them into smaller droplets that are more easily digested by enzymes like lipase",
              explanation:
                "Correct. Bile is crucial for the digestion and absorption of fats.",
              isCorrect: true,
            },
            {
              text: "Bile breaks down carbohydrates into simple sugars",
              explanation:
                "Incorrect. Bile is involved in fat digestion, not carbohydrate digestion.",
              isCorrect: false,
            },
            {
              text: "Bile neutralizes stomach acid in the small intestine",
              explanation:
                "Incorrect. Bile's primary role is emulsifying fats, while bicarbonate neutralizes stomach acid.",
              isCorrect: false,
            },
            {
              text: "Bile absorbs water and electrolytes",
              explanation:
                "Incorrect. Water and electrolyte absorption occurs in the large intestine, not through bile.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is the role of the enteric nervous system?",
          options: [
            {
              text: "The 'gut brain,' a local neural network that regulates gastrointestinal motility and secretion independently of the central nervous system",
              explanation:
                "Correct. The enteric nervous system plays a crucial role in controlling digestion.",
              isCorrect: true,
            },
            {
              text: "Controls the release of hormones from the pituitary gland",
              explanation:
                "Incorrect. The pituitary gland is controlled by the hypothalamus, not the enteric nervous system.",
              isCorrect: false,
            },
            {
              text: "Regulates the body's immune response",
              explanation:
                "Incorrect. The immune system, not the enteric nervous system, regulates immune responses.",
              isCorrect: false,
            },
            {
              text: "Manages the filtration of waste products from the blood",
              explanation:
                "Incorrect. Waste filtration is performed by the kidneys, not the enteric nervous system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What hormones regulate digestive processes?",
          options: [
            {
              text: "Gastrin (stimulates gastric juice secretion), secretin (stimulates bicarbonate release), and cholecystokinin (CCK, stimulates bile and pancreatic enzyme release)",
              explanation:
                "Correct. These hormones play key roles in regulating digestion.",
              isCorrect: true,
            },
            {
              text: "Insulin (lowers blood sugar), glucagon (raises blood sugar), and cortisol (stress hormone)",
              explanation:
                "Incorrect. These hormones regulate metabolism, not digestion.",
              isCorrect: false,
            },
            {
              text: "Adrenaline (increases heart rate), thyroid hormone (regulates metabolism), and aldosterone (regulates sodium)",
              explanation:
                "Incorrect. These hormones are involved in stress response, metabolism, and blood pressure, not digestion.",
              isCorrect: false,
            },
            {
              text: "Testosterone (male sex hormone), estrogen (female sex hormone), and progesterone (pregnancy hormone)",
              explanation:
                "Incorrect. These hormones are related to reproduction, not digestion.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is GERD (Gastroesophageal Reflux Disease)?",
          options: [
            {
              text: "A condition where stomach acid flows back into the esophagus, causing heartburn and potential damage to the esophageal lining",
              explanation:
                "Correct. GERD is a common digestive disorder involving acid reflux.",
              isCorrect: true,
            },
            {
              text: "A disorder where the intestines cannot absorb nutrients",
              explanation:
                "Incorrect. This describes malabsorption syndromes, not GERD.",
              isCorrect: false,
            },
            {
              text: "A condition where bile is not properly released into the digestive system",
              explanation:
                "Incorrect. This would relate to biliary disorders, not GERD.",
              isCorrect: false,
            },
            {
              text: "A condition where the stomach produces too much mucus",
              explanation:
                "Incorrect. Excess mucus production is not a defining feature of GERD.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is a peptic ulcer?",
          options: [
            {
              text: "An erosion of the stomach or duodenal lining caused by excess acid or infection with Helicobacter pylori",
              explanation:
                "Correct. Peptic ulcers are often caused by H. pylori infection and excessive stomach acid.",
              isCorrect: true,
            },
            {
              text: "A condition where the liver fails to produce bile",
              explanation:
                "Incorrect. This describes biliary obstruction, not a peptic ulcer.",
              isCorrect: false,
            },
            {
              text: "A blockage in the intestines preventing food passage",
              explanation:
                "Incorrect. This would be an intestinal obstruction, not a peptic ulcer.",
              isCorrect: false,
            },
            {
              text: "An overgrowth of bacteria in the small intestine",
              explanation:
                "Incorrect. Bacterial overgrowth is a different condition, not related to peptic ulcers.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is Irritable Bowel Syndrome (IBS)?",
          options: [
            {
              text: "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits (diarrhea or constipation)",
              explanation:
                "Correct. IBS is a common gastrointestinal disorder with a variety of symptoms.",
              isCorrect: true,
            },
            {
              text: "A condition where the intestines become inflamed and ulcerated",
              explanation:
                "Incorrect. This describes Inflammatory Bowel Disease (IBD), not IBS.",
              isCorrect: false,
            },
            {
              text: "A condition where stomach acid erodes the esophagus",
              explanation: "Incorrect. This describes GERD, not IBS.",
              isCorrect: false,
            },
            {
              text: "A condition where the liver fails to detoxify the blood",
              explanation:
                "Incorrect. This would describe liver failure, not IBS.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Digestive System",
          text: "What is Inflammatory Bowel Disease (IBD)?",
          options: [
            {
              text: "Chronic inflammation of the digestive tract, including conditions like Crohn's disease and ulcerative colitis",
              explanation:
                "Correct. IBD is a term used for chronic inflammatory conditions of the GI tract.",
              isCorrect: true,
            },
            {
              text: "A condition where the intestines lose their ability to absorb nutrients",
              explanation:
                "Incorrect. While malabsorption can occur with IBD, the definition focuses on chronic inflammation.",
              isCorrect: false,
            },
            {
              text: "A condition where the stomach fails to produce enough acid",
              explanation:
                "Incorrect. This describes hypochlorhydria, not IBD.",
              isCorrect: false,
            },
            {
              text: "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits",
              explanation: "Incorrect. This describes IBS, not IBD.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Urinary System",
      flashcards: [],
      questions: [
        {
          categoryName: "Urinary System",
          text: "What are the primary functions of the urinary system?",
          options: [
            {
              text: "To remove waste products from the blood, regulate blood volume and pressure, balance electrolytes and pH, and detoxify the body",
              explanation:
                "Correct. The urinary system is responsible for these essential functions.",
              isCorrect: true,
            },
            {
              text: "To produce hormones and regulate metabolism",
              explanation:
                "Incorrect. Hormone production and metabolism regulation are functions of the endocrine system.",
              isCorrect: false,
            },
            {
              text: "To break down food and absorb nutrients",
              explanation:
                "Incorrect. These are functions of the digestive system.",
              isCorrect: false,
            },
            {
              text: "To transport oxygen and nutrients throughout the body",
              explanation:
                "Incorrect. This is the function of the cardiovascular system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What are the main organs of the urinary system?",
          options: [
            {
              text: "Kidneys, ureters, bladder, and urethra",
              explanation:
                "Correct. These are the main organs involved in the production, storage, and excretion of urine.",
              isCorrect: true,
            },
            {
              text: "Heart, arteries, veins, and capillaries",
              explanation:
                "Incorrect. These organs are part of the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Stomach, intestines, liver, and pancreas",
              explanation:
                "Incorrect. These organs are part of the digestive system.",
              isCorrect: false,
            },
            {
              text: "Lungs, bronchi, trachea, and alveoli",
              explanation:
                "Incorrect. These organs are part of the respiratory system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the structure and function of the kidneys?",
          options: [
            {
              text: "Bean-shaped organs that filter blood, remove waste, and regulate electrolyte balance; contain nephrons, the functional units",
              explanation:
                "Correct. The kidneys play a crucial role in maintaining homeostasis by filtering blood and forming urine.",
              isCorrect: true,
            },
            {
              text: "Organs that produce digestive enzymes and absorb nutrients",
              explanation:
                "Incorrect. This describes the function of the pancreas and intestines.",
              isCorrect: false,
            },
            {
              text: "Muscles that aid in breathing and oxygen exchange",
              explanation:
                "Incorrect. This describes the function of the diaphragm and lungs.",
              isCorrect: false,
            },
            {
              text: "Glands that secrete hormones into the bloodstream",
              explanation:
                "Incorrect. This describes the function of endocrine glands, not the kidneys.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the nephron and its role?",
          options: [
            {
              text: "The functional unit of the kidney that filters blood, reabsorbs needed substances, and secretes waste into the urine",
              explanation:
                "Correct. Nephrons are the microscopic structures within the kidneys that perform essential functions in urine formation.",
              isCorrect: true,
            },
            {
              text: "A type of blood vessel that carries oxygenated blood",
              explanation:
                "Incorrect. Nephrons are not blood vessels; they are the filtering units of the kidney.",
              isCorrect: false,
            },
            {
              text: "A gland that produces hormones to regulate metabolism",
              explanation:
                "Incorrect. This describes an endocrine gland, not a nephron.",
              isCorrect: false,
            },
            {
              text: "A structure in the heart that regulates blood flow",
              explanation:
                "Incorrect. This describes valves in the heart, not the nephron.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the glomerulus?",
          options: [
            {
              text: "A network of capillaries in the nephron where blood filtration occurs",
              explanation:
                "Correct. The glomerulus is where the initial process of filtering blood to form urine begins.",
              isCorrect: true,
            },
            {
              text: "A structure in the liver that detoxifies blood",
              explanation:
                "Incorrect. The glomerulus is in the kidney, not the liver.",
              isCorrect: false,
            },
            {
              text: "A muscle that pumps blood throughout the body",
              explanation:
                "Incorrect. This describes the heart, not the glomerulus.",
              isCorrect: false,
            },
            {
              text: "A gland that secretes digestive enzymes",
              explanation:
                "Incorrect. Digestive enzyme secretion is performed by the pancreas, not the glomerulus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the role of the proximal convoluted tubule (PCT)?",
          options: [
            {
              text: "Reabsorbs nutrients, ions, and water from the filtrate back into the bloodstream",
              explanation:
                "Correct. The PCT plays a vital role in reclaiming valuable substances from the filtrate.",
              isCorrect: true,
            },
            {
              text: "Secretes hormones into the blood",
              explanation:
                "Incorrect. Hormone secretion is not the function of the PCT.",
              isCorrect: false,
            },
            {
              text: "Filters blood to form urine",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not the PCT.",
              isCorrect: false,
            },
            {
              text: "Stores and concentrates bile",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not in the PCT.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the loop of Henle and its function?",
          options: [
            {
              text: "Creates a concentration gradient in the medulla to concentrate urine by reabsorbing water and salts",
              explanation:
                "Correct. The loop of Henle is essential for the kidney's ability to produce concentrated urine.",
              isCorrect: true,
            },
            {
              text: "Filters blood to remove waste products",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not in the loop of Henle.",
              isCorrect: false,
            },
            {
              text: "Secretes digestive enzymes into the small intestine",
              explanation:
                "Incorrect. The loop of Henle is part of the urinary system, not the digestive system.",
              isCorrect: false,
            },
            {
              text: "Pumps blood through the circulatory system",
              explanation:
                "Incorrect. Pumping blood is the function of the heart, not the loop of Henle.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the role of the distal convoluted tubule (DCT)?",
          options: [
            {
              text: "Further reabsorbs ions and water, regulated by hormones like aldosterone",
              explanation:
                "Correct. The DCT is involved in fine-tuning the composition of urine through hormone-regulated processes.",
              isCorrect: true,
            },
            {
              text: "Filters blood to form urine",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not the DCT.",
              isCorrect: false,
            },
            {
              text: "Secretes hormones into the bloodstream",
              explanation:
                "Incorrect. Hormone secretion is not the function of the DCT.",
              isCorrect: false,
            },
            {
              text: "Stores and releases bile",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not in the DCT.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the function of the collecting duct?",
          options: [
            {
              text: "Final adjustments to urine composition; reabsorbs water under the influence of ADH",
              explanation:
                "Correct. The collecting duct is crucial for regulating water balance in the body.",
              isCorrect: true,
            },
            {
              text: "Filters blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not the collecting duct.",
              isCorrect: false,
            },
            {
              text: "Secretes digestive enzymes",
              explanation:
                "Incorrect. Digestive enzyme secretion is not the function of the collecting duct.",
              isCorrect: false,
            },
            {
              text: "Pumps blood through the body",
              explanation:
                "Incorrect. Pumping blood is the function of the heart, not the collecting duct.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is glomerular filtration?",
          options: [
            {
              text: "The process by which blood pressure forces water, ions, and small molecules from the blood into Bowman's capsule, forming the filtrate",
              explanation:
                "Correct. Glomerular filtration is the first step in urine formation.",
              isCorrect: true,
            },
            {
              text: "The absorption of nutrients from food",
              explanation:
                "Incorrect. Nutrient absorption occurs in the digestive system, not through glomerular filtration.",
              isCorrect: false,
            },
            {
              text: "The process of reabsorbing water from the urine",
              explanation:
                "Incorrect. Water reabsorption occurs later in the nephron, not during glomerular filtration.",
              isCorrect: false,
            },
            {
              text: "The secretion of hormones into the blood",
              explanation:
                "Incorrect. Hormone secretion is not related to glomerular filtration.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is tubular reabsorption?",
          options: [
            {
              text: "The process by which the nephron reclaims valuable substances from the filtrate back into the bloodstream",
              explanation:
                "Correct. Tubular reabsorption is essential for conserving useful materials like glucose and ions.",
              isCorrect: true,
            },
            {
              text: "The release of waste products into the urine",
              explanation:
                "Incorrect. This describes tubular secretion, not reabsorption.",
              isCorrect: false,
            },
            {
              text: "The filtration of blood to form urine",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not during tubular reabsorption.",
              isCorrect: false,
            },
            {
              text: "The storage of urine in the bladder",
              explanation:
                "Incorrect. Urine storage occurs in the bladder, not during tubular reabsorption.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is tubular secretion?",
          options: [
            {
              text: "The active transport of waste products and excess ions from the blood into the filtrate, primarily in the DCT and collecting duct",
              explanation:
                "Correct. Tubular secretion helps rid the body of excess substances and toxins.",
              isCorrect: true,
            },
            {
              text: "The process of filtering blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the glomerulus, not during tubular secretion.",
              isCorrect: false,
            },
            {
              text: "The reabsorption of nutrients from the filtrate",
              explanation:
                "Incorrect. Nutrient reabsorption occurs earlier in the nephron, not during tubular secretion.",
              isCorrect: false,
            },
            {
              text: "The storage of urine in the bladder",
              explanation:
                "Incorrect. Urine storage occurs in the bladder, not during tubular secretion.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the role of ADH in the kidneys?",
          options: [
            {
              text: "Increases water reabsorption in the collecting ducts, reducing urine volume and increasing blood volume",
              explanation:
                "Correct. ADH plays a key role in maintaining the body's water balance.",
              isCorrect: true,
            },
            {
              text: "Stimulates the release of bile",
              explanation:
                "Incorrect. Bile release is controlled by cholecystokinin, not ADH.",
              isCorrect: false,
            },
            {
              text: "Promotes the breakdown of glycogen into glucose",
              explanation:
                "Incorrect. This is the function of glucagon, not ADH.",
              isCorrect: false,
            },
            {
              text: "Increases heart rate and blood pressure",
              explanation:
                "Incorrect. ADH regulates water balance, not heart rate and blood pressure.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What triggers the release of renin?",
          options: [
            {
              text: "Low blood pressure or low sodium levels in the blood stimulate renin release from the kidneys",
              explanation:
                "Correct. Renin is released in response to signals indicating low blood pressure or sodium levels.",
              isCorrect: true,
            },
            {
              text: "High blood glucose levels",
              explanation:
                "Incorrect. High blood glucose triggers insulin release, not renin.",
              isCorrect: false,
            },
            {
              text: "Increased heart rate",
              explanation:
                "Incorrect. Heart rate increases are not directly related to renin release.",
              isCorrect: false,
            },
            {
              text: "Elevated blood oxygen levels",
              explanation:
                "Incorrect. Blood oxygen levels do not trigger renin release.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the function of aldosterone?",
          options: [
            {
              text: "Promotes sodium reabsorption and potassium excretion, leading to water retention and increased blood pressure",
              explanation:
                "Correct. Aldosterone helps regulate blood pressure by adjusting sodium and potassium levels.",
              isCorrect: true,
            },
            {
              text: "Regulates blood glucose levels",
              explanation:
                "Incorrect. Insulin and glucagon regulate blood glucose levels, not aldosterone.",
              isCorrect: false,
            },
            {
              text: "Increases heart rate",
              explanation:
                "Incorrect. Aldosterone regulates electrolyte balance, not heart rate.",
              isCorrect: false,
            },
            {
              text: "Stimulates red blood cell production",
              explanation:
                "Incorrect. Erythropoietin stimulates red blood cell production, not aldosterone.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the role of the ureters?",
          options: [
            {
              text: "Transport urine from the kidneys to the bladder via peristalsis",
              explanation:
                "Correct. The ureters are tubes that carry urine from the kidneys to the bladder.",
              isCorrect: true,
            },
            {
              text: "Store and expel urine during urination",
              explanation:
                "Incorrect. The bladder stores urine, not the ureters.",
              isCorrect: false,
            },
            {
              text: "Filter blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the kidneys, not the ureters.",
              isCorrect: false,
            },
            {
              text: "Reabsorb water and electrolytes",
              explanation:
                "Incorrect. Water and electrolyte reabsorption occur in the nephron, not the ureters.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the function of the bladder?",
          options: [
            {
              text: "Stores urine until it is excreted",
              explanation:
                "Correct. The bladder holds urine until it is ready to be expelled from the body.",
              isCorrect: true,
            },
            {
              text: "Filters blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the kidneys, not the bladder.",
              isCorrect: false,
            },
            {
              text: "Reabsorbs nutrients and water",
              explanation:
                "Incorrect. Nutrient and water reabsorption occur in the nephron, not the bladder.",
              isCorrect: false,
            },
            {
              text: "Produces urine by filtering blood",
              explanation:
                "Incorrect. Urine production occurs in the kidneys, not the bladder.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is the function of the urethra?",
          options: [
            {
              text: "Carries urine from the bladder to the outside of the body during urination",
              explanation:
                "Correct. The urethra is the final pathway for urine to leave the body.",
              isCorrect: true,
            },
            {
              text: "Transports urine from the kidneys to the bladder",
              explanation:
                "Incorrect. This function is performed by the ureters, not the urethra.",
              isCorrect: false,
            },
            {
              text: "Stores urine until it is excreted",
              explanation:
                "Incorrect. Urine storage occurs in the bladder, not the urethra.",
              isCorrect: false,
            },
            {
              text: "Filters blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the kidneys, not the urethra.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is micturition?",
          options: [
            {
              text: "The process of urination, involving the coordinated relaxation of the urethral sphincters and contraction of the bladder muscles",
              explanation:
                "Correct. Micturition is the process of expelling urine from the body.",
              isCorrect: true,
            },
            {
              text: "The process of blood filtration in the kidneys",
              explanation:
                "Incorrect. Blood filtration is part of urine formation, not micturition.",
              isCorrect: false,
            },
            {
              text: "The secretion of digestive enzymes",
              explanation:
                "Incorrect. Digestive enzyme secretion is not related to micturition.",
              isCorrect: false,
            },
            {
              text: "The absorption of nutrients from food",
              explanation:
                "Incorrect. Nutrient absorption occurs in the digestive system, not through micturition.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is acid-base balance and how is it regulated?",
          options: [
            {
              text: "The maintenance of the body's pH within a narrow range; regulated by buffer systems, respiratory compensation, and renal compensation",
              explanation:
                "Correct. The body maintains acid-base balance through multiple mechanisms involving the respiratory and urinary systems.",
              isCorrect: true,
            },
            {
              text: "The regulation of blood pressure through hormone secretion",
              explanation:
                "Incorrect. Blood pressure regulation involves different mechanisms, not directly related to acid-base balance.",
              isCorrect: false,
            },
            {
              text: "The process of filtering blood to remove waste",
              explanation:
                "Incorrect. Blood filtration is related to urine formation, not acid-base balance.",
              isCorrect: false,
            },
            {
              text: "The absorption of nutrients from the digestive tract",
              explanation:
                "Incorrect. Nutrient absorption occurs in the digestive system, not through acid-base balance.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is chronic kidney disease (CKD)?",
          options: [
            {
              text: "Progressive loss of kidney function over time, potentially leading to end-stage renal disease (ESRD) requiring dialysis or transplantation",
              explanation:
                "Correct. CKD is a serious condition that can result in severe kidney damage over time.",
              isCorrect: true,
            },
            {
              text: "A sudden loss of kidney function that is often reversible",
              explanation:
                "Incorrect. This describes acute kidney injury (AKI), not CKD.",
              isCorrect: false,
            },
            {
              text: "The presence of kidney stones that block urine flow",
              explanation:
                "Incorrect. Kidney stones are a separate condition, not the same as CKD.",
              isCorrect: false,
            },
            {
              text: "An infection of the kidneys caused by bacteria",
              explanation: "Incorrect. This describes pyelonephritis, not CKD.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is acute kidney injury (AKI)?",
          options: [
            {
              text: "Sudden loss of kidney function, often reversible with prompt treatment",
              explanation:
                "Correct. AKI is a rapid decline in kidney function, typically treatable if addressed quickly.",
              isCorrect: true,
            },
            {
              text: "A chronic condition where kidney function gradually declines",
              explanation:
                "Incorrect. This describes chronic kidney disease (CKD), not AKI.",
              isCorrect: false,
            },
            {
              text: "The formation of kidney stones",
              explanation:
                "Incorrect. Kidney stones are a separate condition from AKI.",
              isCorrect: false,
            },
            {
              text: "A long-term infection of the kidneys",
              explanation:
                "Incorrect. Long-term kidney infections are not the same as AKI.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What are kidney stones (renal calculi)?",
          options: [
            {
              text: "Crystallized minerals in the kidney that can obstruct urine flow, causing pain and potential damage to the kidney",
              explanation:
                "Correct. Kidney stones are solid masses that can cause significant pain and complications if not treated.",
              isCorrect: true,
            },
            {
              text: "Inflammation of the kidneys",
              explanation:
                "Incorrect. Inflammation of the kidneys is called nephritis, not kidney stones.",
              isCorrect: false,
            },
            {
              text: "A sudden decline in kidney function",
              explanation:
                "Incorrect. A sudden decline in kidney function is referred to as acute kidney injury (AKI), not kidney stones.",
              isCorrect: false,
            },
            {
              text: "The loss of protein in the urine",
              explanation:
                "Incorrect. Protein loss in the urine is a condition called proteinuria, not kidney stones.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Urinary System",
          text: "What is urinalysis?",
          options: [
            {
              text: "A test that examines the content of urine to detect and diagnose various conditions, including infections, kidney disease, and diabetes",
              explanation:
                "Correct. Urinalysis is a common diagnostic tool used to assess kidney function and detect various disorders.",
              isCorrect: true,
            },
            {
              text: "A surgical procedure to remove kidney stones",
              explanation:
                "Incorrect. Urinalysis is a diagnostic test, not a surgical procedure.",
              isCorrect: false,
            },
            {
              text: "A method of measuring blood pressure",
              explanation:
                "Incorrect. Blood pressure measurement is not related to urinalysis.",
              isCorrect: false,
            },
            {
              text: "A technique to filter waste from the blood",
              explanation:
                "Incorrect. Filtration of blood waste occurs in the kidneys, not through urinalysis.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Reproductive System",
      flashcards: [],
      questions: [
        {
          categoryName: "Reproductive System",
          text: "What are the primary functions of the reproductive system?",
          options: [
            {
              text: "To produce, store, and transport gametes (sperm and eggs) and facilitate fertilization and the development of offspring",
              explanation:
                "Correct. The reproductive system is responsible for producing and supporting the development of offspring.",
              isCorrect: true,
            },
            {
              text: "To filter blood and remove waste products from the body",
              explanation:
                "Incorrect. This is the function of the urinary system.",
              isCorrect: false,
            },
            {
              text: "To regulate metabolism and maintain homeostasis",
              explanation:
                "Incorrect. This is the role of the endocrine system.",
              isCorrect: false,
            },
            {
              text: "To control the body's response to stress",
              explanation:
                "Incorrect. Stress responses are regulated by the endocrine and nervous systems, not the reproductive system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the structure and function of the testes?",
          options: [
            {
              text: "Male reproductive organs that produce sperm (spermatogenesis) and secrete testosterone",
              explanation:
                "Correct. The testes are the primary male reproductive organs responsible for producing sperm and hormones.",
              isCorrect: true,
            },
            {
              text: "Glands that produce digestive enzymes",
              explanation:
                "Incorrect. The testes do not produce digestive enzymes; this is the function of the pancreas.",
              isCorrect: false,
            },
            {
              text: "Organs that filter waste from the blood",
              explanation:
                "Incorrect. The kidneys filter waste from the blood, not the testes.",
              isCorrect: false,
            },
            {
              text: "Muscles that contract during ejaculation",
              explanation:
                "Incorrect. The muscles involved in ejaculation are not the testes; they are part of the reproductive tract.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is spermatogenesis?",
          options: [
            {
              text: "The production of sperm through meiosis in the seminiferous tubules of the testes",
              explanation:
                "Correct. Spermatogenesis is the process of sperm production in males.",
              isCorrect: true,
            },
            {
              text: "The fertilization of an egg by sperm",
              explanation:
                "Incorrect. Fertilization is the union of sperm and egg, not the production of sperm.",
              isCorrect: false,
            },
            {
              text: "The production of eggs in females",
              explanation:
                "Incorrect. The production of eggs is called oogenesis, not spermatogenesis.",
              isCorrect: false,
            },
            {
              text: "The secretion of testosterone by the testes",
              explanation:
                "Incorrect. Spermatogenesis refers specifically to sperm production, not hormone secretion.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What are the components of sperm?",
          options: [
            {
              text: "Head (contains DNA), midpiece (packed with mitochondria for energy), and tail (flagellum for movement)",
              explanation:
                "Correct. These components enable sperm to move and fertilize an egg.",
              isCorrect: true,
            },
            {
              text: "Nucleus, cytoplasm, and cell membrane",
              explanation:
                "Incorrect. These are general cellular components, not specific to sperm.",
              isCorrect: false,
            },
            {
              text: "Ovary, fallopian tube, and uterus",
              explanation:
                "Incorrect. These are parts of the female reproductive system, not components of sperm.",
              isCorrect: false,
            },
            {
              text: "Egg, zygote, and blastocyst",
              explanation:
                "Incorrect. These are stages in the development of a fertilized egg, not components of sperm.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the role of the epididymis?",
          options: [
            {
              text: "Coiled tube where sperm mature and are stored until ejaculation",
              explanation:
                "Correct. The epididymis is crucial for the maturation and storage of sperm.",
              isCorrect: true,
            },
            {
              text: "Structure where eggs are produced",
              explanation:
                "Incorrect. Eggs are produced in the ovaries, not the epididymis.",
              isCorrect: false,
            },
            {
              text: "Gland that secretes seminal fluid",
              explanation:
                "Incorrect. The seminal vesicles secrete seminal fluid, not the epididymis.",
              isCorrect: false,
            },
            {
              text: "Muscle that contracts during ejaculation",
              explanation:
                "Incorrect. The epididymis stores sperm, but it is not a muscle involved in ejaculation.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the function of the vas deferens?",
          options: [
            {
              text: "Transports sperm from the epididymis to the urethra during ejaculation",
              explanation:
                "Correct. The vas deferens is a key duct in the male reproductive system.",
              isCorrect: true,
            },
            {
              text: "Filters waste products from the blood",
              explanation:
                "Incorrect. The kidneys filter waste, not the vas deferens.",
              isCorrect: false,
            },
            {
              text: "Stores urine until it is excreted",
              explanation:
                "Incorrect. Urine is stored in the bladder, not the vas deferens.",
              isCorrect: false,
            },
            {
              text: "Produces testosterone",
              explanation:
                "Incorrect. Testosterone is produced by the testes, not the vas deferens.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the role of the seminal vesicles?",
          options: [
            {
              text: "Produce seminal fluid that contains fructose, providing energy for sperm",
              explanation:
                "Correct. Seminal vesicles contribute to the seminal fluid, which nourishes and supports sperm.",
              isCorrect: true,
            },
            {
              text: "Store and mature sperm",
              explanation:
                "Incorrect. Sperm are stored and mature in the epididymis, not the seminal vesicles.",
              isCorrect: false,
            },
            {
              text: "Produce eggs",
              explanation:
                "Incorrect. Eggs are produced by the ovaries in females, not by seminal vesicles.",
              isCorrect: false,
            },
            {
              text: "Filter blood to remove waste",
              explanation:
                "Incorrect. Blood filtration occurs in the kidneys, not the seminal vesicles.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the function of the prostate gland?",
          options: [
            {
              text: "Produces a slightly alkaline fluid that makes up part of the semen and neutralizes acidity in the female reproductive tract",
              explanation:
                "Correct. The prostate gland's secretions are important for sperm viability.",
              isCorrect: true,
            },
            {
              text: "Stores and releases bile",
              explanation:
                "Incorrect. Bile is stored in the gallbladder, not the prostate gland.",
              isCorrect: false,
            },
            {
              text: "Filters waste products from the blood",
              explanation:
                "Incorrect. Blood filtration is a function of the kidneys, not the prostate gland.",
              isCorrect: false,
            },
            {
              text: "Produces hormones that regulate metabolism",
              explanation:
                "Incorrect. Hormone production for metabolism is mainly a function of the thyroid gland, not the prostate.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the function of the bulbourethral glands?",
          options: [
            {
              text: "Secrete mucus that lubricates the urethra during ejaculation",
              explanation:
                "Correct. The bulbourethral glands produce a mucus-like fluid that helps in lubrication during ejaculation.",
              isCorrect: true,
            },
            {
              text: "Produce sperm",
              explanation:
                "Incorrect. Sperm is produced in the testes, not the bulbourethral glands.",
              isCorrect: false,
            },
            {
              text: "Store urine until it is excreted",
              explanation:
                "Incorrect. Urine is stored in the bladder, not in the bulbourethral glands.",
              isCorrect: false,
            },
            {
              text: "Regulate blood pressure",
              explanation:
                "Incorrect. Blood pressure regulation is not a function of the bulbourethral glands.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the structure and function of the ovaries?",
          options: [
            {
              text: "Female reproductive organs that produce eggs (oogenesis) and secrete estrogen and progesterone",
              explanation:
                "Correct. The ovaries are central to female reproductive function.",
              isCorrect: true,
            },
            {
              text: "Organs that filter blood and remove waste products",
              explanation:
                "Incorrect. Blood filtration occurs in the kidneys, not the ovaries.",
              isCorrect: false,
            },
            {
              text: "Glands that produce digestive enzymes",
              explanation:
                "Incorrect. The pancreas produces digestive enzymes, not the ovaries.",
              isCorrect: false,
            },
            {
              text: "Muscles that contract during childbirth",
              explanation:
                "Incorrect. The uterus contracts during childbirth, not the ovaries.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is oogenesis?",
          options: [
            {
              text: "The production of eggs through meiosis, beginning before birth and resuming during puberty",
              explanation:
                "Correct. Oogenesis is the process of egg development in females.",
              isCorrect: true,
            },
            {
              text: "The production of sperm in males",
              explanation:
                "Incorrect. The production of sperm is called spermatogenesis, not oogenesis.",
              isCorrect: false,
            },
            {
              text: "The process of fertilizing an egg",
              explanation:
                "Incorrect. Fertilization is the union of egg and sperm, not the production of eggs.",
              isCorrect: false,
            },
            {
              text: "The secretion of estrogen by the ovaries",
              explanation:
                "Incorrect. Estrogen secretion is a function of the ovaries, but it is not the same as oogenesis.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What occurs during ovulation?",
          options: [
            {
              text: "The release of a mature egg (secondary oocyte) from the ovary, typically around day 14 of the menstrual cycle",
              explanation:
                "Correct. Ovulation is a key event in the menstrual cycle.",
              isCorrect: true,
            },
            {
              text: "The fertilization of an egg by sperm",
              explanation:
                "Incorrect. Fertilization occurs after ovulation if sperm are present.",
              isCorrect: false,
            },
            {
              text: "The thickening of the uterine lining",
              explanation:
                "Incorrect. The thickening of the uterine lining occurs during the proliferative phase, not ovulation.",
              isCorrect: false,
            },
            {
              text: "The onset of menstruation",
              explanation:
                "Incorrect. Menstruation occurs if the egg is not fertilized, usually after ovulation.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the function of the endometrium?",
          options: [
            {
              text: "The inner lining of the uterus that thickens in preparation for pregnancy and is shed during menstruation if fertilization does not occur",
              explanation:
                "Correct. The endometrium is essential for supporting a potential pregnancy.",
              isCorrect: true,
            },
            {
              text: "The outer layer of the uterus that protects the organ",
              explanation:
                "Incorrect. The outer layer of the uterus is the perimetrium, not the endometrium.",
              isCorrect: false,
            },
            {
              text: "A muscle that contracts during childbirth",
              explanation:
                "Incorrect. The myometrium, not the endometrium, is the muscular layer responsible for contractions during childbirth.",
              isCorrect: false,
            },
            {
              text: "The tissue that produces eggs",
              explanation:
                "Incorrect. Eggs are produced in the ovaries, not in the endometrium.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the role of the cervix?",
          options: [
            {
              text: "The narrow lower portion of the uterus that opens into the vagina and dilates during childbirth",
              explanation:
                "Correct. The cervix plays a crucial role in both protecting the uterus and allowing passage during childbirth.",
              isCorrect: true,
            },
            {
              text: "The site where fertilization occurs",
              explanation:
                "Incorrect. Fertilization typically occurs in the fallopian tubes, not in the cervix.",
              isCorrect: false,
            },
            {
              text: "The organ that produces hormones for the menstrual cycle",
              explanation:
                "Incorrect. Hormones for the menstrual cycle are primarily produced by the ovaries.",
              isCorrect: false,
            },
            {
              text: "The structure that stores and releases eggs",
              explanation:
                "Incorrect. Eggs are stored and released by the ovaries, not the cervix.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the menstrual cycle?",
          options: [
            {
              text: "The monthly cycle of changes in the female reproductive system, including the development and release of an egg and preparation of the uterus for pregnancy",
              explanation:
                "Correct. The menstrual cycle involves several phases that prepare the body for pregnancy.",
              isCorrect: true,
            },
            {
              text: "The process of egg fertilization",
              explanation:
                "Incorrect. Fertilization is a separate process that can occur during the menstrual cycle but is not the cycle itself.",
              isCorrect: false,
            },
            {
              text: "The period of pregnancy",
              explanation:
                "Incorrect. Pregnancy occurs after a successful menstrual cycle but is not part of the menstrual cycle itself.",
              isCorrect: false,
            },
            {
              text: "The time during which a female is fertile",
              explanation:
                "Incorrect. Fertility is related to the menstrual cycle, but the menstrual cycle encompasses more than just the fertile window.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What are the phases of the menstrual cycle?",
          options: [
            {
              text: "Follicular phase, ovulation, luteal phase, and menstruation",
              explanation:
                "Correct. These are the four main phases of the menstrual cycle.",
              isCorrect: true,
            },
            {
              text: "Proliferative phase, secretory phase, luteal phase, and ovulation",
              explanation:
                "Incorrect. While the proliferative and secretory phases are part of the cycle, the correct sequence includes menstruation, not these phases.",
              isCorrect: false,
            },
            {
              text: "Maturation phase, fertilization phase, implantation phase, and menstruation",
              explanation:
                "Incorrect. Fertilization and implantation are separate events that may or may not occur during the cycle.",
              isCorrect: false,
            },
            {
              text: "Hormonal phase, egg release phase, pregnancy phase, and menstruation",
              explanation:
                "Incorrect. The menstrual cycle is divided into follicular, ovulation, luteal phases, and menstruation.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the function of estrogen in the menstrual cycle?",
          options: [
            {
              text: "Promotes the growth of the endometrium and regulates the menstrual cycle",
              explanation:
                "Correct. Estrogen is crucial for the preparation of the uterus and regulation of the cycle.",
              isCorrect: true,
            },
            {
              text: "Triggers ovulation",
              explanation:
                "Incorrect. While estrogen plays a role, the luteinizing hormone (LH) is the primary trigger for ovulation.",
              isCorrect: false,
            },
            {
              text: "Causes the shedding of the uterine lining",
              explanation:
                "Incorrect. Progesterone withdrawal causes the shedding of the uterine lining, not estrogen.",
              isCorrect: false,
            },
            {
              text: "Prepares the breasts for lactation",
              explanation:
                "Incorrect. While estrogen plays a role in breast development, lactation preparation is primarily driven by prolactin.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the role of progesterone?",
          options: [
            {
              text: "Maintains the endometrium for potential pregnancy and inhibits uterine contractions",
              explanation:
                "Correct. Progesterone is essential for sustaining the endometrium and preventing premature contractions.",
              isCorrect: true,
            },
            {
              text: "Triggers ovulation",
              explanation:
                "Incorrect. Ovulation is triggered by luteinizing hormone (LH), not progesterone.",
              isCorrect: false,
            },
            {
              text: "Stimulates milk production",
              explanation:
                "Incorrect. Milk production is stimulated by prolactin, not progesterone.",
              isCorrect: false,
            },
            {
              text: "Increases the production of sperm",
              explanation:
                "Incorrect. Progesterone is a female hormone and does not affect sperm production.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is fertilization?",
          options: [
            {
              text: "The union of a sperm cell and an egg cell, typically occurring in the fallopian tube",
              explanation:
                "Correct. Fertilization marks the beginning of a new organism and typically occurs in the fallopian tube.",
              isCorrect: true,
            },
            {
              text: "The release of an egg from the ovary",
              explanation:
                "Incorrect. The release of an egg is called ovulation, not fertilization.",
              isCorrect: false,
            },
            {
              text: "The implantation of a fertilized egg into the uterus",
              explanation:
                "Incorrect. Implantation occurs after fertilization.",
              isCorrect: false,
            },
            {
              text: "The process by which the uterus sheds its lining",
              explanation:
                "Incorrect. Shedding of the uterine lining is menstruation, not fertilization.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is the role of the placenta during pregnancy?",
          options: [
            {
              text: "An organ that provides oxygen and nutrients to the developing fetus and removes waste products",
              explanation:
                "Correct. The placenta is critical for the exchange of nutrients and waste between mother and fetus.",
              isCorrect: true,
            },
            {
              text: "A muscle that contracts during childbirth",
              explanation:
                "Incorrect. The placenta is not a muscle; the uterus contracts during childbirth.",
              isCorrect: false,
            },
            {
              text: "The site of egg production",
              explanation:
                "Incorrect. Eggs are produced in the ovaries, not in the placenta.",
              isCorrect: false,
            },
            {
              text: "The structure that stores and releases hormones",
              explanation:
                "Incorrect. While the placenta produces hormones, its primary function is nutrient exchange, not hormone storage.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What are the trimesters of pregnancy?",
          options: [
            {
              text: "First trimester (organogenesis), second trimester (growth and development), third trimester (final maturation and preparation for birth)",
              explanation:
                "Correct. These are the three trimesters of pregnancy, each with distinct developmental milestones.",
              isCorrect: true,
            },
            {
              text: "First trimester (implantation), second trimester (rapid brain development), third trimester (birth)",
              explanation:
                "Incorrect. While implantation and brain development occur, they are not the defining features of the trimesters.",
              isCorrect: false,
            },
            {
              text: "First trimester (ovulation), second trimester (fertilization), third trimester (labor and delivery)",
              explanation:
                "Incorrect. Ovulation and fertilization occur before pregnancy, not within the trimesters.",
              isCorrect: false,
            },
            {
              text: "First trimester (fertilization), second trimester (organ formation), third trimester (growth and maturation)",
              explanation:
                "Incorrect. While close, the correct terms are organogenesis, growth and development, and final maturation.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is Polycystic Ovary Syndrome (PCOS)?",
          options: [
            {
              text: "A hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles and infertility",
              explanation:
                "Correct. PCOS is a common endocrine disorder affecting women of reproductive age.",
              isCorrect: true,
            },
            {
              text: "An infection of the fallopian tubes",
              explanation:
                "Incorrect. Infections of the fallopian tubes are called salpingitis, not PCOS.",
              isCorrect: false,
            },
            {
              text: "A condition where endometrial tissue grows outside the uterus",
              explanation: "Incorrect. This describes endometriosis, not PCOS.",
              isCorrect: false,
            },
            {
              text: "A type of cancer affecting the ovaries",
              explanation:
                "Incorrect. Ovarian cancer is different from PCOS, which is a hormonal disorder.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is endometriosis?",
          options: [
            {
              text: "A condition where endometrial tissue grows outside the uterus, causing pain and potential fertility issues",
              explanation:
                "Correct. Endometriosis can cause significant pain and complications, including infertility.",
              isCorrect: true,
            },
            {
              text: "An infection of the uterus",
              explanation:
                "Incorrect. Endometriosis is not an infection; it's a condition involving misplaced tissue.",
              isCorrect: false,
            },
            {
              text: "A form of ovarian cancer",
              explanation:
                "Incorrect. Endometriosis is not cancerous, though it can be severe.",
              isCorrect: false,
            },
            {
              text: "A condition characterized by the absence of menstrual periods",
              explanation:
                "Incorrect. The absence of menstrual periods is called amenorrhea, not endometriosis.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is erectile dysfunction (ED)?",
          options: [
            {
              text: "The inability to achieve or maintain an erection sufficient for sexual intercourse",
              explanation:
                "Correct. Erectile dysfunction can be caused by physical, psychological, or hormonal factors.",
              isCorrect: true,
            },
            {
              text: "The inability to ejaculate",
              explanation:
                "Incorrect. Inability to ejaculate is a different condition, not necessarily related to erectile dysfunction.",
              isCorrect: false,
            },
            {
              text: "A condition where sperm production is low",
              explanation:
                "Incorrect. Low sperm production is a different issue, known as oligospermia, not ED.",
              isCorrect: false,
            },
            {
              text: "The inability to conceive a child",
              explanation:
                "Incorrect. The inability to conceive is referred to as infertility, not erectile dysfunction.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Reproductive System",
          text: "What is infertility?",
          options: [
            {
              text: "The inability to conceive after one year of unprotected intercourse, which can be due to various factors affecting either the male or female reproductive systems",
              explanation:
                "Correct. Infertility can be due to issues in either partner and may require medical intervention.",
              isCorrect: true,
            },
            {
              text: "The absence of menstruation in women",
              explanation:
                "Incorrect. The absence of menstruation is called amenorrhea, not infertility.",
              isCorrect: false,
            },
            {
              text: "A condition characterized by painful menstruation",
              explanation:
                "Incorrect. Painful menstruation is known as dysmenorrhea, not infertility.",
              isCorrect: false,
            },
            {
              text: "The presence of cysts in the ovaries",
              explanation:
                "Incorrect. Cysts in the ovaries are associated with PCOS, which can contribute to infertility but is not synonymous with it.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "Nervous System",
      flashcards: [],
      questions: [
        {
          categoryName: "Nervous System",
          text: "What is the central nervous system (CNS)?",
          options: [
            {
              text: "The brain and spinal cord, responsible for processing and transmitting information throughout the body",
              explanation:
                "Correct. The CNS is the control center of the body, processing and sending out signals.",
              isCorrect: true,
            },
            {
              text: "A network of nerves that connect the brain to the rest of the body",
              explanation:
                "Incorrect. This describes the peripheral nervous system (PNS), not the CNS.",
              isCorrect: false,
            },
            {
              text: "A group of glands that secrete hormones into the bloodstream",
              explanation: "Incorrect. This describes the endocrine system.",
              isCorrect: false,
            },
            {
              text: "The digestive tract, responsible for breaking down food and absorbing nutrients",
              explanation:
                "Incorrect. This describes the digestive system, not the nervous system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the peripheral nervous system (PNS)?",
          options: [
            {
              text: "The part of the nervous system outside the CNS, consisting of the somatic nervous system (voluntary control) and autonomic nervous system (involuntary control)",
              explanation:
                "Correct. The PNS connects the CNS to the rest of the body and controls both voluntary and involuntary actions.",
              isCorrect: true,
            },
            {
              text: "The control center of the body, processing and sending out signals",
              explanation:
                "Incorrect. This describes the central nervous system (CNS).",
              isCorrect: false,
            },
            {
              text: "A system that regulates hormone secretion",
              explanation:
                "Incorrect. Hormone secretion is regulated by the endocrine system, not the PNS.",
              isCorrect: false,
            },
            {
              text: "A network of muscles responsible for movement",
              explanation:
                "Incorrect. While the PNS does control muscles, it is not the muscles themselves.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of neurons in the nervous system?",
          options: [
            {
              text: "Neurons are the basic building blocks of the nervous system, responsible for transmitting information throughout the body",
              explanation:
                "Correct. Neurons are specialized cells that communicate through electrical and chemical signals.",
              isCorrect: true,
            },
            {
              text: "Neurons secrete hormones into the bloodstream",
              explanation:
                "Incorrect. Hormones are secreted by endocrine glands, not neurons.",
              isCorrect: false,
            },
            {
              text: "Neurons transport oxygen and nutrients to cells",
              explanation:
                "Incorrect. This function is carried out by the blood in the cardiovascular system.",
              isCorrect: false,
            },
            {
              text: "Neurons filter waste products from the blood",
              explanation:
                "Incorrect. This is the function of the kidneys in the urinary system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What are the main parts of a neuron?",
          options: [
            {
              text: "Dendrites (receive signals), cell body (soma), axon (transmits signals), and synapse (gap between neurons where communication occurs)",
              explanation:
                "Correct. These are the key components of a neuron, each playing a vital role in neural communication.",
              isCorrect: true,
            },
            {
              text: "Heart, lungs, and brain",
              explanation:
                "Incorrect. These are major organs, but not parts of a neuron.",
              isCorrect: false,
            },
            {
              text: "Arteries, veins, and capillaries",
              explanation:
                "Incorrect. These are components of the circulatory system, not parts of a neuron.",
              isCorrect: false,
            },
            {
              text: "Bones, muscles, and joints",
              explanation:
                "Incorrect. These are components of the skeletal and muscular systems, not parts of a neuron.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the function of neurotransmitters?",
          options: [
            {
              text: "Chemicals that transmit signals across the synapse from one neuron to another",
              explanation:
                "Correct. Neurotransmitters are crucial for communication between neurons in the nervous system.",
              isCorrect: true,
            },
            {
              text: "Hormones that regulate metabolism",
              explanation:
                "Incorrect. Hormones regulate various body functions, but neurotransmitters specifically transmit signals between neurons.",
              isCorrect: false,
            },
            {
              text: "Proteins that carry oxygen in the blood",
              explanation:
                "Incorrect. Hemoglobin in red blood cells carries oxygen, not neurotransmitters.",
              isCorrect: false,
            },
            {
              text: "Cells that produce antibodies",
              explanation:
                "Incorrect. Antibodies are produced by B cells in the immune system, not neurotransmitters.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the autonomic nervous system (ANS)?",
          options: [
            {
              text: "The part of the PNS that controls involuntary functions such as heart rate, digestion, and respiration",
              explanation:
                "Correct. The ANS regulates essential involuntary functions that keep the body running smoothly.",
              isCorrect: true,
            },
            {
              text: "The part of the CNS that processes voluntary movements",
              explanation:
                "Incorrect. Voluntary movements are controlled by the somatic nervous system, not the ANS.",
              isCorrect: false,
            },
            {
              text: "A group of glands that produce hormones",
              explanation:
                "Incorrect. Glands produce hormones as part of the endocrine system, not the nervous system.",
              isCorrect: false,
            },
            {
              text: "The system responsible for reflex actions",
              explanation:
                "Incorrect. Reflex actions involve both the CNS and PNS, but the ANS specifically controls involuntary functions.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the difference between the sympathetic and parasympathetic nervous systems?",
          options: [
            {
              text: "The sympathetic nervous system prepares the body for fight-or-flight responses, while the parasympathetic nervous system promotes rest-and-digest functions",
              explanation:
                "Correct. These two divisions of the ANS work in opposition to maintain balance in the body.",
              isCorrect: true,
            },
            {
              text: "The sympathetic nervous system controls voluntary actions, while the parasympathetic nervous system controls involuntary actions",
              explanation:
                "Incorrect. Both systems control involuntary actions, but they have different roles.",
              isCorrect: false,
            },
            {
              text: "The sympathetic nervous system secretes hormones, while the parasympathetic nervous system secretes neurotransmitters",
              explanation:
                "Incorrect. Both systems use neurotransmitters for communication, not hormones.",
              isCorrect: false,
            },
            {
              text: "The sympathetic nervous system is part of the CNS, while the parasympathetic nervous system is part of the PNS",
              explanation:
                "Incorrect. Both systems are part of the autonomic nervous system, which is a division of the PNS.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of the brainstem?",
          options: [
            {
              text: "Controls basic life functions such as breathing, heartbeat, and blood pressure",
              explanation:
                "Correct. The brainstem is critical for maintaining essential life functions.",
              isCorrect: true,
            },
            {
              text: "Processes sensory information from the environment",
              explanation:
                "Incorrect. The brainstem does play a role in processing sensory information, but this is primarily managed by the cerebral cortex.",
              isCorrect: false,
            },
            {
              text: "Regulates voluntary muscle movements",
              explanation:
                "Incorrect. Voluntary muscle movements are controlled by the motor cortex in the brain, not the brainstem.",
              isCorrect: false,
            },
            {
              text: "Stores memories and emotions",
              explanation:
                "Incorrect. Memories and emotions are primarily stored and processed in the hippocampus and limbic system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the function of the cerebellum?",
          options: [
            {
              text: "Coordinates voluntary movements, balance, and posture",
              explanation:
                "Correct. The cerebellum plays a key role in fine-tuning motor activities and maintaining balance.",
              isCorrect: true,
            },
            {
              text: "Controls hormone secretion",
              explanation:
                "Incorrect. Hormone secretion is controlled by the endocrine system, not the cerebellum.",
              isCorrect: false,
            },
            {
              text: "Processes visual information",
              explanation:
                "Incorrect. Visual information is processed primarily by the occipital lobe of the brain, not the cerebellum.",
              isCorrect: false,
            },
            {
              text: "Regulates blood pressure and heart rate",
              explanation:
                "Incorrect. These functions are primarily managed by the brainstem and autonomic nervous system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of the hypothalamus?",
          options: [
            {
              text: "Regulates basic bodily functions like hunger, thirst, temperature, and the release of hormones from the pituitary gland",
              explanation:
                "Correct. The hypothalamus is crucial for maintaining homeostasis in the body.",
              isCorrect: true,
            },
            {
              text: "Processes sensory information and relays it to the cerebral cortex",
              explanation:
                "Incorrect. This is the function of the thalamus, not the hypothalamus.",
              isCorrect: false,
            },
            {
              text: "Controls muscle movements",
              explanation:
                "Incorrect. Muscle movements are controlled by the motor cortex, not the hypothalamus.",
              isCorrect: false,
            },
            {
              text: "Filters blood and produces urine",
              explanation:
                "Incorrect. This is the function of the kidneys, not the hypothalamus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the function of the thalamus?",
          options: [
            {
              text: "Acts as the brain's relay station, directing sensory information to the appropriate areas of the cerebral cortex",
              explanation:
                "Correct. The thalamus is essential for processing and relaying sensory input to the correct regions of the brain.",
              isCorrect: true,
            },
            {
              text: "Regulates emotions and memory",
              explanation:
                "Incorrect. Emotions and memory are primarily regulated by the limbic system, including the amygdala and hippocampus.",
              isCorrect: false,
            },
            {
              text: "Controls muscle coordination and balance",
              explanation:
                "Incorrect. Muscle coordination and balance are controlled by the cerebellum, not the thalamus.",
              isCorrect: false,
            },
            {
              text: "Produces and secretes hormones",
              explanation:
                "Incorrect. Hormone production and secretion are functions of the hypothalamus and endocrine glands, not the thalamus.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of the cerebral cortex?",
          options: [
            {
              text: "Responsible for higher-level functions like thinking, planning, and problem-solving",
              explanation:
                "Correct. The cerebral cortex is involved in complex cognitive processes.",
              isCorrect: true,
            },
            {
              text: "Regulates heart rate and breathing",
              explanation:
                "Incorrect. Heart rate and breathing are regulated by the brainstem and autonomic nervous system.",
              isCorrect: false,
            },
            {
              text: "Controls reflex actions",
              explanation:
                "Incorrect. Reflex actions are typically controlled by the spinal cord.",
              isCorrect: false,
            },
            {
              text: "Processes emotions and drives",
              explanation:
                "Incorrect. Emotions and drives are processed by the limbic system, not the cerebral cortex.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the limbic system?",
          options: [
            {
              text: "A group of interconnected structures in the brain that are involved in emotion, memory, and motivation",
              explanation:
                "Correct. The limbic system includes structures such as the amygdala, hippocampus, and hypothalamus.",
              isCorrect: true,
            },
            {
              text: "The outer layer of the brain involved in complex cognitive functions",
              explanation:
                "Incorrect. This describes the cerebral cortex, not the limbic system.",
              isCorrect: false,
            },
            {
              text: "A network of nerves that controls voluntary muscle movements",
              explanation:
                "Incorrect. Voluntary muscle movements are controlled by the motor cortex and somatic nervous system, not the limbic system.",
              isCorrect: false,
            },
            {
              text: "A series of glands that produce hormones",
              explanation:
                "Incorrect. Glands that produce hormones are part of the endocrine system, not the limbic system.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the function of the hippocampus?",
          options: [
            {
              text: "Involved in the formation and retrieval of long-term memories",
              explanation:
                "Correct. The hippocampus is crucial for converting short-term memories into long-term memories.",
              isCorrect: true,
            },
            {
              text: "Regulates breathing and heart rate",
              explanation:
                "Incorrect. Breathing and heart rate are regulated by the brainstem, not the hippocampus.",
              isCorrect: false,
            },
            {
              text: "Controls voluntary muscle movements",
              explanation:
                "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the hippocampus.",
              isCorrect: false,
            },
            {
              text: "Processes visual information",
              explanation:
                "Incorrect. Visual information is processed primarily by the occipital lobe of the cerebral cortex.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the amygdala responsible for?",
          options: [
            {
              text: "Processing emotions, especially fear and aggression",
              explanation:
                "Correct. The amygdala plays a key role in emotional processing, particularly in responses related to fear and aggression.",
              isCorrect: true,
            },
            {
              text: "Controlling voluntary muscle movements",
              explanation:
                "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the amygdala.",
              isCorrect: false,
            },
            {
              text: "Regulating blood pressure and heart rate",
              explanation:
                "Incorrect. These functions are managed by the brainstem and autonomic nervous system.",
              isCorrect: false,
            },
            {
              text: "Storing long-term memories",
              explanation:
                "Incorrect. Long-term memory storage is primarily managed by the hippocampus, not the amygdala.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the corpus callosum?",
          options: [
            {
              text: "A thick band of nerve fibers that connects the left and right hemispheres of the brain, allowing communication between them",
              explanation:
                "Correct. The corpus callosum is essential for interhemispheric communication.",
              isCorrect: true,
            },
            {
              text: "A structure that controls balance and coordination",
              explanation:
                "Incorrect. Balance and coordination are primarily controlled by the cerebellum, not the corpus callosum.",
              isCorrect: false,
            },
            {
              text: "A region of the brain involved in processing visual information",
              explanation:
                "Incorrect. Visual processing occurs in the occipital lobe, not the corpus callosum.",
              isCorrect: false,
            },
            {
              text: "A gland that secretes hormones",
              explanation:
                "Incorrect. The corpus callosum is a bundle of nerve fibers, not a gland.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the difference between white matter and gray matter in the brain?",
          options: [
            {
              text: "White matter consists of myelinated axons, while gray matter consists of neuron cell bodies, dendrites, and unmyelinated axons",
              explanation:
                "Correct. White matter is involved in communication between different brain regions, and gray matter processes information.",
              isCorrect: true,
            },
            {
              text: "White matter is found in the brainstem, while gray matter is found in the cerebellum",
              explanation:
                "Incorrect. Both white and gray matter are found throughout the brain, not limited to specific areas.",
              isCorrect: false,
            },
            {
              text: "White matter is involved in processing emotions, while gray matter controls muscle movements",
              explanation:
                "Incorrect. Processing emotions involves the limbic system, and muscle control involves the motor cortex. Both white and gray matter are involved in various brain functions.",
              isCorrect: false,
            },
            {
              text: "White matter is responsible for sensory perception, while gray matter is responsible for memory storage",
              explanation:
                "Incorrect. Sensory perception and memory storage involve both white and gray matter in different capacities.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is neuroplasticity?",
          options: [
            {
              text: "The brain's ability to reorganize and adapt by forming new neural connections throughout life",
              explanation:
                "Correct. Neuroplasticity allows the brain to recover from injury, adapt to new experiences, and learn new information.",
              isCorrect: true,
            },
            {
              text: "The process by which neurons die and are replaced by new ones",
              explanation:
                "Incorrect. Neuron death and replacement are not related to neuroplasticity; instead, neuroplasticity involves changing existing connections.",
              isCorrect: false,
            },
            {
              text: "A condition where the brain hardens and loses flexibility",
              explanation:
                "Incorrect. Neuroplasticity actually refers to the brain's flexibility and adaptability, not hardening.",
              isCorrect: false,
            },
            {
              text: "The tendency of neurons to only fire in response to specific stimuli",
              explanation:
                "Incorrect. While neurons do respond to specific stimuli, neuroplasticity refers to the brain's ability to change and adapt.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of the autonomic nervous system in controlling heart rate?",
          options: [
            {
              text: "The autonomic nervous system regulates heart rate by balancing the actions of the sympathetic and parasympathetic nervous systems",
              explanation:
                "Correct. The sympathetic nervous system increases heart rate, while the parasympathetic nervous system decreases it.",
              isCorrect: true,
            },
            {
              text: "The autonomic nervous system directly pumps blood through the heart",
              explanation:
                "Incorrect. The heart pumps blood through its muscular contractions, not through the actions of the autonomic nervous system.",
              isCorrect: false,
            },
            {
              text: "The autonomic nervous system only decreases heart rate during sleep",
              explanation:
                "Incorrect. The autonomic nervous system can adjust heart rate in various situations, not just during sleep.",
              isCorrect: false,
            },
            {
              text: "The autonomic nervous system controls voluntary muscle movements in the heart",
              explanation:
                "Incorrect. The heart muscle operates involuntarily, controlled by the autonomic nervous system, not voluntary muscle control.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "Nervous System",
          text: "What is the role of the somatic nervous system?",
          options: [
            {
              text: "The somatic nervous system controls voluntary movements of skeletal muscles",
              explanation:
                "Correct. The somatic nervous system is responsible for voluntary control of body movements through skeletal muscles.",
              isCorrect: true,
            },
            {
              text: "The somatic nervous system regulates involuntary functions like heart rate and digestion",
              explanation:
                "Incorrect. Involuntary functions are regulated by the autonomic nervous system, not the somatic nervous system.",
              isCorrect: false,
            },
            {
              text: "The somatic nervous system produces hormones that control body functions",
              explanation:
                "Incorrect. Hormone production is the role of the endocrine system, not the somatic nervous system.",
              isCorrect: false,
            },
            {
              text: "The somatic nervous system controls the production of red blood cells",
              explanation:
                "Incorrect. Red blood cell production occurs in the bone marrow, not under the control of the somatic nervous system.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "APY II Notes I",
      flashcards: [],
      questions: [
        {
          categoryName: "APY II Notes I",
          text: "What is the primary function of red blood cells (RBCs)?",
          options: [
            {
              text: "To transport oxygen from the lungs to body tissues and return carbon dioxide from tissues to the lungs",
              explanation:
                "Correct. RBCs contain hemoglobin, which binds oxygen and facilitates its transport.",
              isCorrect: true,
            },
            {
              text: "To produce antibodies that fight infections",
              explanation:
                "Incorrect. Antibodies are produced by white blood cells, not RBCs.",
              isCorrect: false,
            },
            {
              text: "To regulate blood pressure through vasoconstriction",
              explanation:
                "Incorrect. RBCs do not regulate blood pressure; they primarily transport gases.",
              isCorrect: false,
            },
            {
              text: "To filter out toxins from the blood",
              explanation:
                "Incorrect. Filtering blood toxins is a function of the liver and kidneys, not RBCs.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "APY II Notes I",
          text: "Which chamber of the heart pumps oxygenated blood to the body?",
          options: [
            {
              text: "Left ventricle",
              explanation:
                "Correct. The left ventricle pumps oxygenated blood into the aorta and out to the body.",
              isCorrect: true,
            },
            {
              text: "Right ventricle",
              explanation:
                "Incorrect. The right ventricle pumps deoxygenated blood to the lungs.",
              isCorrect: false,
            },
            {
              text: "Left atrium",
              explanation:
                "Incorrect. The left atrium receives oxygenated blood from the lungs.",
              isCorrect: false,
            },
            {
              text: "Right atrium",
              explanation:
                "Incorrect. The right atrium receives deoxygenated blood from the body.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "APY II Notes I",
          text: "What is the function of the sinoatrial (SA) node?",
          options: [
            {
              text: "It acts as the pacemaker of the heart, initiating the electrical impulses that regulate heartbeats",
              explanation:
                "Correct. The SA node generates electrical signals that cause the heart to contract.",
              isCorrect: true,
            },
            {
              text: "It stimulates voluntary muscle contractions",
              explanation:
                "Incorrect. The SA node controls involuntary heart contractions, not voluntary muscle movements.",
              isCorrect: false,
            },
            {
              text: "It controls the rate of digestion",
              explanation:
                "Incorrect. The SA node regulates the heart's electrical activity, not digestion.",
              isCorrect: false,
            },
            {
              text: "It monitors blood pressure in the arteries",
              explanation:
                "Incorrect. Baroreceptors, not the SA node, monitor blood pressure.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "APY II Notes I",
          text: "What is the role of the baroreceptors in the cardiovascular system?",
          options: [
            {
              text: "They detect changes in blood pressure and send signals to the brain to regulate it",
              explanation:
                "Correct. Baroreceptors help maintain stable blood pressure by sending signals to the cardiovascular center in the brain.",
              isCorrect: true,
            },
            {
              text: "They produce hormones that regulate blood sugar levels",
              explanation:
                "Incorrect. Baroreceptors do not produce hormones or regulate blood sugar levels.",
              isCorrect: false,
            },
            {
              text: "They control the rate of heart contraction",
              explanation:
                "Incorrect. The SA node, not baroreceptors, controls the heart's rate of contraction.",
              isCorrect: false,
            },
            {
              text: "They initiate the clotting process after injury",
              explanation:
                "Incorrect. Platelets initiate clotting, not baroreceptors.",
              isCorrect: false,
            },
          ],
        },
        {
          categoryName: "APY II Notes I",
          text: "What is the function of capillaries?",
          options: [
            {
              text: "To allow the exchange of nutrients, gases, and waste between blood and tissues",
              explanation:
                "Correct. Capillaries are small blood vessels where gas, nutrient, and waste exchange occurs.",
              isCorrect: true,
            },
            {
              text: "To transport blood directly from arteries to veins",
              explanation:
                "Incorrect. Capillaries serve as exchange points, not direct transport between arteries and veins.",
              isCorrect: false,
            },
            {
              text: "To store oxygen for future use",
              explanation:
                "Incorrect. Capillaries are involved in immediate gas exchange, not storage.",
              isCorrect: false,
            },
            {
              text: "To regulate heart rate",
              explanation: "Incorrect. Capillaries do not regulate heart rate.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      name: "APY II Test 3",
      flashcards: [],
      questions: [
        {
          categoryName: "APY II Test 3",
          text: "What is the primary function of the kidneys?",
          options: [
            {
              text: "Filter blood and form urine",
              explanation: "Correct. The kidneys filter the blood to remove wastes and form urine.",
              isCorrect: true
            },
            {
              text: "Transport urine to the bladder",
              explanation: "Incorrect. The ureters transport urine from the kidneys to the bladder.",
              isCorrect: false
            },
            {
              text: "Store urine",
              explanation: "Incorrect. The urinary bladder stores urine until it is expelled.",
              isCorrect: false
            },
            {
              text: "Regulate blood glucose levels",
              explanation: "Incorrect. Blood glucose levels are primarily regulated by insulin and glucagon.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What structure in the kidney filters blood?",
          options: [
            {
              text: "Glomerulus",
              explanation: "Correct. The glomerulus is a capillary network that filters blood in the kidneys.",
              isCorrect: true
            },
            {
              text: "Ureter",
              explanation: "Incorrect. The ureter transports urine from the kidney to the bladder.",
              isCorrect: false
            },
            {
              text: "Renal pelvis",
              explanation: "Incorrect. The renal pelvis collects urine and directs it into the ureter.",
              isCorrect: false
            },
            {
              text: "Nephron loop",
              explanation: "Incorrect. The nephron loop is involved in urine concentration but does not filter blood.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What hormone is responsible for increasing water reabsorption in the kidneys?",
          options: [
            {
              text: "ADH (Antidiuretic Hormone)",
              explanation: "Correct. ADH increases the permeability of renal tubules to water, promoting water reabsorption.",
              isCorrect: true
            },
            {
              text: "Aldosterone",
              explanation: "Incorrect. Aldosterone primarily increases sodium reabsorption, which indirectly increases water retention.",
              isCorrect: false
            },
            {
              text: "Renin",
              explanation: "Incorrect. Renin is part of the renin-angiotensin system and primarily helps regulate blood pressure.",
              isCorrect: false
            },
            {
              text: "ANP (Atrial Natriuretic Peptide)",
              explanation: "Incorrect. ANP decreases water reabsorption by inhibiting aldosterone.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "How is water balance primarily maintained in the body?",
          options: [
            {
              text: "Through regulation of water intake and output",
              explanation: "Correct. Water balance is controlled by thirst and the regulation of urine production by the kidneys.",
              isCorrect: true
            },
            {
              text: "By adjusting oxygen intake",
              explanation: "Incorrect. Oxygen intake is not related to water balance.",
              isCorrect: false
            },
            {
              text: "Through calcium reabsorption",
              explanation: "Incorrect. Calcium reabsorption is regulated by parathyroid hormone, not directly involved in water balance.",
              isCorrect: false
            },
            {
              text: "By regulating body temperature",
              explanation: "Incorrect. Body temperature is regulated separately, primarily through thermoregulation mechanisms.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What hormone triggers ovulation in females?",
          options: [
            {
              text: "LH (Luteinizing Hormone)",
              explanation: "Correct. LH surge triggers ovulation, releasing a secondary oocyte from the follicle.",
              isCorrect: true
            },
            {
              text: "FSH (Follicle-Stimulating Hormone)",
              explanation: "Incorrect. FSH primarily stimulates follicle development but does not trigger ovulation.",
              isCorrect: false
            },
            {
              text: "Estrogen",
              explanation: "Incorrect. Estrogen plays a role in thickening the endometrium but does not directly trigger ovulation.",
              isCorrect: false
            },
            {
              text: "Progesterone",
              explanation: "Incorrect. Progesterone prepares the uterus for pregnancy but is not involved in ovulation.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What is the function of the testes in the male reproductive system?",
          options: [
            {
              text: "Produce sperm cells and secrete testosterone",
              explanation: "Correct. The testes are responsible for spermatogenesis and testosterone secretion.",
              isCorrect: true
            },
            {
              text: "Store sperm cells",
              explanation: "Incorrect. The epididymides store and mature sperm cells, not the testes.",
              isCorrect: false
            },
            {
              text: "Transport sperm cells to the outside",
              explanation: "Incorrect. The vas deferens and urethra transport sperm cells, not the testes.",
              isCorrect: false
            },
            {
              text: "Secrete seminal fluid",
              explanation: "Incorrect. Seminal fluid is produced by accessory glands like the seminal vesicles, not the testes.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What is the role of the juxtaglomerular apparatus in kidney function?",
          options: [
            {
              text: "Regulates blood pressure through renin secretion",
              explanation: "Correct. The juxtaglomerular apparatus secretes renin, which helps regulate blood pressure.",
              isCorrect: true
            },
            {
              text: "Filters blood to form urine",
              explanation: "Incorrect. Blood filtration occurs in the glomerulus, not the juxtaglomerular apparatus.",
              isCorrect: false
            },
            {
              text: "Increases water reabsorption in the kidneys",
              explanation: "Incorrect. Water reabsorption is regulated by ADH and aldosterone, not the juxtaglomerular apparatus.",
              isCorrect: false
            },
            {
              text: "Produces erythropoietin",
              explanation: "Incorrect. Erythropoietin is produced by the kidneys, but not specifically by the juxtaglomerular apparatus.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What process leads to the formation of sperm cells?",
          options: [
            {
              text: "Spermatogenesis",
              explanation: "Correct. Spermatogenesis is the process of sperm cell formation that occurs in the seminiferous tubules.",
              isCorrect: true
            },
            {
              text: "Oogenesis",
              explanation: "Incorrect. Oogenesis is the process of egg cell formation in females.",
              isCorrect: false
            },
            {
              text: "Meiosis I",
              explanation: "Incorrect. Meiosis I is part of spermatogenesis but does not describe the entire process.",
              isCorrect: false
            },
            {
              text: "Ovulation",
              explanation: "Incorrect. Ovulation refers to the release of an egg from the ovary in females.",
              isCorrect: false
            }
          ]
        },{
          categoryName: "APY II Test 3",
          text: "What is the role of the renal corpuscle in urine formation?",
          options: [
            {
              text: "Filters blood in the kidneys",
              explanation: "Correct. The renal corpuscle, consisting of the glomerulus and glomerular capsule, filters blood as the first step in urine formation.",
              isCorrect: true
            },
            {
              text: "Reabsorbs water and sodium",
              explanation: "Incorrect. Water and sodium reabsorption occur primarily in the renal tubules, not the renal corpuscle.",
              isCorrect: false
            },
            {
              text: "Produces hormones",
              explanation: "Incorrect. The renal corpuscle is involved in filtration, not hormone production.",
              isCorrect: false
            },
            {
              text: "Stores urine",
              explanation: "Incorrect. The urinary bladder stores urine, not the renal corpuscle.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What hormone is responsible for increasing sodium reabsorption in the kidneys?",
          options: [
            {
              text: "Aldosterone",
              explanation: "Correct. Aldosterone increases sodium reabsorption in the distal tubules and collecting ducts.",
              isCorrect: true
            },
            {
              text: "ADH",
              explanation: "Incorrect. ADH increases water reabsorption, not sodium reabsorption.",
              isCorrect: false
            },
            {
              text: "Renin",
              explanation: "Incorrect. Renin regulates blood pressure but does not directly affect sodium reabsorption.",
              isCorrect: false
            },
            {
              text: "ANP",
              explanation: "Incorrect. Atrial natriuretic peptide (ANP) reduces sodium reabsorption, not increases it.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "Which hormone regulates water balance by increasing the permeability of the collecting ducts in the kidneys?",
          options: [
            {
              text: "ADH (Antidiuretic Hormone)",
              explanation: "Correct. ADH increases the permeability of the collecting ducts to water, allowing more water to be reabsorbed.",
              isCorrect: true
            },
            {
              text: "Aldosterone",
              explanation: "Incorrect. Aldosterone primarily regulates sodium and potassium, not water permeability.",
              isCorrect: false
            },
            {
              text: "Renin",
              explanation: "Incorrect. Renin is involved in blood pressure regulation, not direct water reabsorption.",
              isCorrect: false
            },
            {
              text: "Cortisol",
              explanation: "Incorrect. Cortisol is a stress hormone and does not regulate water balance directly.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What are the primary methods of water intake in the human body?",
          options: [
            {
              text: "Drinking fluids, eating moist foods, and metabolic water production",
              explanation: "Correct. Water is gained through drinking fluids, eating food with water content, and metabolic water produced during nutrient oxidation.",
              isCorrect: true
            },
            {
              text: "Absorbing water from the environment",
              explanation: "Incorrect. Water intake is internal, primarily through drinking and food consumption.",
              isCorrect: false
            },
            {
              text: "Respiratory absorption",
              explanation: "Incorrect. Water is not absorbed through respiration; rather, water is lost through respiration.",
              isCorrect: false
            },
            {
              text: "Direct absorption through the skin",
              explanation: "Incorrect. Humans do not absorb significant amounts of water through the skin.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What are the two types of cells produced in the first meiotic division during spermatogenesis?",
          options: [
            {
              text: "Secondary spermatocytes",
              explanation: "Correct. The first meiotic division produces secondary spermatocytes, which are haploid cells.",
              isCorrect: true
            },
            {
              text: "Spermatids",
              explanation: "Incorrect. Spermatids are produced after the second meiotic division, not the first.",
              isCorrect: false
            },
            {
              text: "Spermatozoa",
              explanation: "Incorrect. Spermatozoa are mature sperm cells that form after spermiogenesis.",
              isCorrect: false
            },
            {
              text: "Primary spermatocytes",
              explanation: "Incorrect. Primary spermatocytes undergo meiosis I to form secondary spermatocytes.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What is the role of estrogen in the female reproductive system?",
          options: [
            {
              text: "Stimulates the growth of reproductive organs and secondary sex characteristics",
              explanation: "Correct. Estrogen is crucial for the development and maintenance of reproductive organs and secondary sex characteristics.",
              isCorrect: true
            },
            {
              text: "Stimulates ovulation",
              explanation: "Incorrect. Ovulation is triggered by luteinizing hormone (LH), not estrogen.",
              isCorrect: false
            },
            {
              text: "Stimulates milk production",
              explanation: "Incorrect. Milk production is stimulated by prolactin, not estrogen.",
              isCorrect: false
            },
            {
              text: "Maintains pregnancy",
              explanation: "Incorrect. Progesterone is the hormone responsible for maintaining pregnancy.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What process involves the release of a mature oocyte from the ovary?",
          options: [
            {
              text: "Ovulation",
              explanation: "Correct. Ovulation refers to the release of a secondary oocyte from a mature follicle.",
              isCorrect: true
            },
            {
              text: "Spermatogenesis",
              explanation: "Incorrect. Spermatogenesis is the process of sperm cell production in males.",
              isCorrect: false
            },
            {
              text: "Meiosis I",
              explanation: "Incorrect. Meiosis I is part of oocyte development but does not refer to the release of the egg.",
              isCorrect: false
            },
            {
              text: "Menstruation",
              explanation: "Incorrect. Menstruation refers to the shedding of the uterine lining, not the release of the egg.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "How does the bicarbonate buffer system help regulate pH in the body?",
          options: [
            {
              text: "By converting strong acids to weak acids and strong bases to weak bases",
              explanation: "Correct. The bicarbonate buffer system helps maintain pH balance by converting strong acids and bases into weaker forms.",
              isCorrect: true
            },
            {
              text: "By increasing the release of hydrogen ions",
              explanation: "Incorrect. The bicarbonate buffer system works to neutralize hydrogen ions, not release them.",
              isCorrect: false
            },
            {
              text: "By absorbing water",
              explanation: "Incorrect. The bicarbonate buffer system regulates pH, not water absorption.",
              isCorrect: false
            },
            {
              text: "By increasing oxygen levels in the blood",
              explanation: "Incorrect. Oxygen levels are regulated by respiration, not the bicarbonate buffer system.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What organ is responsible for the excretion of hydrogen ions to regulate pH?",
          options: [
            {
              text: "Kidneys",
              explanation: "Correct. The kidneys excrete hydrogen ions and reabsorb bicarbonate to help regulate blood pH.",
              isCorrect: true
            },
            {
              text: "Lungs",
              explanation: "Incorrect. The lungs regulate CO2 levels, which indirectly affects pH, but they do not excrete hydrogen ions.",
              isCorrect: false
            },
            {
              text: "Liver",
              explanation: "Incorrect. The liver is not involved in hydrogen ion excretion or direct pH regulation.",
              isCorrect: false
            },
            {
              text: "Heart",
              explanation: "Incorrect. The heart pumps blood but does not regulate pH directly.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "What is glomerular filtration?",
          options: [
            {
              text: "The process of filtering blood in the glomerulus",
              explanation: "Correct. Glomerular filtration is the first step in urine formation, where blood is filtered in the glomerulus.",
              isCorrect: true
            },
            {
              text: "Reabsorption of sodium in the proximal tubule",
              explanation: "Incorrect. Reabsorption of sodium occurs after filtration in the renal tubules.",
              isCorrect: false
            },
            {
              text: "Secretion of wastes into the nephron",
              explanation: "Incorrect. Secretion occurs later in the process, after filtration, as wastes are actively transported into the nephron.",
              isCorrect: false
            },
            {
              text: "The excretion of urine from the body",
              explanation: "Incorrect. Excretion is the final step, involving the release of urine from the bladder.",
              isCorrect: false
            }
          ]
        },
        {
          categoryName: "APY II Test 3",
          text: "How is blood pressure regulated by the renin-angiotensin system?",
          options: [
            {
              text: "By causing vasoconstriction and stimulating aldosterone release",
              explanation: "Correct. The renin-angiotensin system increases blood pressure by causing vasoconstriction and increasing sodium retention through aldosterone.",
              isCorrect: true
            },
            {
              text: "By increasing water excretion",
              explanation: "Incorrect. The renin-angiotensin system conserves water and sodium to increase blood pressure.",
              isCorrect: false
            },
            {
              text: "By stimulating ADH release",
              explanation: "Incorrect. While ADH is involved in water balance, it is not the primary hormone regulated by the renin-angiotensin system.",
              isCorrect: false
            },
            {
              text: "By decreasing blood volume",
              explanation: "Incorrect. The renin-angiotensin system increases blood volume to raise blood pressure.",
              isCorrect: false
            }
          ]
        },
        
      ],
    },   
  ],
};

export default anatomyAndPhysiologyII;
