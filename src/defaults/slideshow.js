import { ImagePainting, TextLayoutViewFocus } from '@digirati/me-core';

export default {
  annotation: {
    'Image::painting': ImagePainting,
    'TextualBody::layout-viewport-focus': TextLayoutViewFocus,
  },
  metaOntology: {
    'Properties.Annotation': 'Item',
    'Properties.Canvas': 'Slide',
    'Properties.Manifest': 'Slideshow',
    'Manifest.behavior.value.yes': 'vam-annotated-zoom',
    'Manifest.behavior.value.no': 'not-vam-annotated-zoom',
    'Canvas.Summary': 'Short description',
    'Canvas.Label': 'Title',
    'Canvas.RequiredStatement': 'Legal notice',
    'Canvas.RequiredStatement.Label': 'Title',
    'Canvas.RequiredStatement.Value': 'Body',
    'Canvas.Metadata': 'Additional info',
    'Canvas.Metadata.Label': 'Title',
    'Canvas.Behaviors': 'Positioning',
    'NewAnnotationForm.fitCanvasToContent': 'add',
    'NewAnnotationForm.fitContentToCanvas': 'add',
    'Canvas.behavior.label.layout': 'Slide layout',
    'Canvas.behavior.value.layout-overlay': 'text overlay',
    'Canvas.behavior.value.layout-split': 'split',
    'Canvas.behavior.value.info-position-left': 'left',
    'Canvas.behavior.value.info-position-center': 'center',
    'Canvas.behavior.value.info-position-right': 'right',
    'Canvas.behavior.value.embedded-tour': 'embedded-tour',
    'Canvas.behavior.value.not-embedded-tour': 'not-embedded-tour',
  },
  behavior: {
    Manifest: {
      groups: [
        {
          label: 'annotated slides in the slide show?',
          values: ['vam-annotated-zoom', 'not-vam-annotated-zoom']
        }
      ]
    },
    Canvas: {
      groups: [
        {
          label: 'layout',
          values: ['layout-overlay', 'layout-split'],
        },
        {
          label: 'embedded tour',
          values: ['embedded-tour', 'not-embedded-tour']
        },
        {
          label: 'info position',
          values: [
            'info-position-left',
            'info-position-right',
            'info-position-center',
          ],
        },
      ],
    },
  },
  annotationFormButtons: {
    NewAnnotationForm: ['dismiss', 'fitCanvasToContent'],
    'TextualBodyDescribing.NewAnnotationForm': [
      'dismiss',
      'fitContentToCanvas',
    ],
    'TextLayoutViewFocus.NewAnnotationForm': ['dismiss', 'fitContentToCanvas'],
  },
  propertyFields: {
    Manifest: [
      'label',
      'summary',
      'requiredStatement',
      'metadata',
      'navDate',
      'rights',
      'behavior'
    ],
    Canvas: ['behavior', 'label', 'summary', 'requiredStatement'],
    Annotation: ['label', 'summary'],
    TextPropertiesForm: ['body.id', 'body.value'],
    ImagePropertiesForm: [
      'body.service.id',
      'body.id',
      'thumbnail.0.service.id',
      'thumbnail.0.id',
    ],
  },
  iiifResourceDefaults: {
    Canvas: {
      behavior: ['layout-split', 'info-position-left'],
    },
  },
  propertyPanel: {
    selectionType: 'accordion',
    selectionVisibility: {
      null: ['Manifest'],
      Canvas: ['Canvas', 'Manifest'],
      Annotation: ['Annotation', 'Canvas', 'Manifest'],
    },
  },
};
