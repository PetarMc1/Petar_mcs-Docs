import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  all: [{type: 'autogenerated', dirName: '.'}],
  

  generators: [
    {
      type: "category",
      label: "RGB Generator",
      link: {
        type: "generated-index",
        slug: "generators/rgb-generator/",
      },
      items: [
        "Generators/RGBgenerator/AboutTheProject",
        "Generators/RGBgenerator/How-to-use-it"
      ],
    },
    {
      type: "category",
      label: "Font Generator",
      link: {
        type: "generated-index",
        slug: "generators/font-generator/",
      },
      items: [
        "Generators/FontGenerator/AboutTheProject",
        "Generators/FontGenerator/How-to-use-it"
      ],
    },
    "Generators/Contributing",
],

api: [
  'MinecraftItemsAPI-v2/Welcome',
  'MinecraftItemsAPI-v2/AvailableEndpoints',
  {
    type: "category",
    label: "Advanced",
    link: {
      type: "generated-index",
      slug: "/api/advanced",
    },
    items: [
      'MinecraftItemsAPI-v2/Advanced/naming-convention',
      'MinecraftItemsAPI-v2/Advanced/unusual-item-names'
    ],
  }
]


}
export default sidebars;
