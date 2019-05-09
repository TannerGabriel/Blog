package com.example.camerax

import android.Manifest
import android.os.Bundle
import android.view.TextureView
import androidx.camera.core.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.LifecycleOwner

private const val REQUEST_CODE_PERMISSIONS = 10

// This is an array of all the permission specified in the manifest
private val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)

class MainActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val previewConfig = PreviewConfig.Builder().build()
        val preview = Preview(previewConfig)

        val textureView: TextureView = findViewById(R.id.view_finder)

        // The output data-handling is configured in a listener.
        preview.setOnPreviewOutputUpdateListener { previewOutput ->
            textureView.surfaceTexture = previewOutput.surfaceTexture
        }

        // The use case is bound to an Android Lifecycle with the following code.
        CameraX.bindToLifecycle(this as LifecycleOwner, preview)
    }

}
